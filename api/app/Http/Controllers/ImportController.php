<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QuizController;
use App\Models\Archive;
use App\Models\User;
use App\Models\Quiz;
use App\Models\Question;
use Illuminate\Support\Facades\Schema;
use \stdClass;

class ImportController extends Controller
{

    public function __construct()
    {
        User::query()->delete();
        Question::query()->delete();
    }

    //
    public function index(Request $request)
    {

        $cvs = $request->file('cvs');
        $cvs = $request->cvs->path();

        $row = 1;
        $properties = [];
        $datas = [];
        $collunmRemoved = [];
        $database = [];
        if (($handle = fopen($cvs, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $num = count($data);
                $register = [];
                for ($c = 0; $c < $num; $c++) {
                    //adicionar colunas ao array para remover
                    if ($row === 1) {
                        if (strpos($data[$c], '[') == true)
                            array_push($collunmRemoved, $c);
                        else
                            array_push($properties, $data[$c]);
                    }
                    //se o indice nao esta no array para remover, adiciona
                    if (!is_int(array_search($c, $collunmRemoved)) && $row > 1) {
                        array_push($register, $data[$c]);
                    }
                }
                array_push($datas, $register);
                $row++;
            }
            fclose($handle);
        }

        for ($i = 0; $i < count($datas); $i++) {
            $obj = new \stdClass;
            foreach ($datas[$i] as $index => $item) {
                $obj->{$properties[$index]} = $item;
            }
            array_push($database, $obj);
        }

        $users = [];
        for ($i = 1; $i < count($database); $i++) {
            array_push($users, strtolower($database[$i]->Username));
        }
        $users = array_unique($users);

        $arrUsers = [];
        $count = 1;
        foreach ($users as $index => $item) {
            $objUsers = new \stdClass;
            for ($i = 1; $i < count($database); $i++) {
                if ($database[$i]->{'Username'} === $item) {
                    if ($count === 1) {
                        $objUsers->id = $index;
                        $objUsers->Username = $database[$i]->{'Username'};
                        $objUsers->Nome = $database[$i]->{'Nome'};
                        $count++;
                        $dataArr = [];
                        $dataObj = new \stdClass;
                    }
                    $dataObj->Timestamp = $database[$i]->{'Timestamp'};
                    $dataObj->{'Data Hoje'} = $database[$i]->{'Data Hoje'};
                    $dataObj->{'0. A que horas você acordou essa manhã?'} = $database[$i]->{'0. A que horas você acordou essa manhã?'};
                    $dataObj->{'1. A que horas se levantou da cama essa manhã?'} = $database[$i]->{'1. A que horas se levantou da cama essa manhã?'};
                    $dataObj->{'2. A que horas foi para a cama a noite passada?'} = $database[$i]->{'2. A que horas foi para a cama a noite passada?'};
                    $dataObj->{'3. Quanto tempo demorou a cair no sono?'} = $database[$i]->{'3. Quanto tempo demorou a cair no sono?'};
                    $dataObj->{'4. Quantas vezes você despertou ao longo do sono?'} = $database[$i]->{'4. Quantas vezes você despertou ao longo do sono?'};
                    $dataObj->{'5. Especifique quanto tempo durou cada despertar?'} = $database[$i]->{'5. Especifique quanto tempo durou cada despertar?'};
                    $dataObj->{'6. Ao todo, quanto tempo acha que dormiu?'} = $database[$i]->{'6. Ao todo, quanto tempo acha que dormiu?'};
                    $dataObj->{'Fez uso de medicação?'} = $database[$i]->{'Fez uso de medicação?'};
                    $dataObj->{'Nome da Medicação'} = $database[$i]->{'Nome da Medicação'};
                    $dataObj->{'Quantos comprimidos tomou para ajudar a dormir?'} = $database[$i]->{'Quantos comprimidos tomou para ajudar a dormir?'};
                    $dataObj->{'Você cochilou?'} = $database[$i]->{'Você cochilou?'};
                    $dataObj->{'Quanto tempo durou o cochilo?'} = $database[$i]->{'Quanto tempo durou o cochilo?'};
                    $dataObj->{'Fez uso de bebida alcoólica ontem a noite?'} = $database[$i]->{'Fez uso de bebida alcoólica ontem a noite?'};
                    $dataObj->{'O quanto você se sente bem esta manhã de 0 a 10?'} = $database[$i]->{'O quanto você se sente bem esta manhã de 0 a 10?'};
                    $dataObj->{'O quanto aproveitou de seu sono a noite passada de 0 a 10?'} = $database[$i]->{'O quanto aproveitou de seu sono a noite passada de 0 a 10?'};
                    $dataObj->{'Obervação'} = $database[$i]->{'Obervação'};
                    array_push($dataArr, $dataObj);
                }
                $objUsers->data = $dataArr;
            }
            $count = 1;
            array_push($arrUsers, $objUsers);
        }


        //QUESTIONS
        $i = 1;
        $questions = [];
        foreach ($database[1] as $key => $item) {
            if ($i > 5) {
                $question['question'] = $key;
                array_push($questions, $question);
            }
            $i++;
        }
        $request = new Request($questions);
        $createdQuestions = (new QuestionController)->create($request);

        //users
        $obj = [];
        $profileIndex = 0;
        foreach ($users as $index => $item) {
            $user['user_login'] = $item;
            $user['profile_name'] = $arrUsers[$profileIndex]->Nome;
            array_push($obj, $user);
            $profileIndex++;
        }
        $request = new Request($obj);
        $createdUsers = (new UserController)->create($request);

        //quiz
        $objQuiz = [];
        for ($z = 0; $z < count($arrUsers); $z++) {

            for ($c = 0; $c < count($arrUsers[$z]->data); $c++) {

                //QUIZ
                $user_id = User::where('user_login', $arrUsers[$z]->Username)->get()[0]->ID;
                $archive_id = Archive::where('user_id', $user_id)->get()[0]->ID;
                $quiz['timestamp'] = $arrUsers[$z]->data[$c]->{'Timestamp'};
                $quiz['date'] = $arrUsers[$z]->data[$c]->{'Data Hoje'};

                $quiz['archive_id'] = $archive_id;
                $quiz['answers'] = $arrUsers[$z]->data[$c];
                array_push($objQuiz, $quiz);
            }
        }
        //quiz
        $request = new Request($objQuiz);
        $createdQuiz = (new QuizController)->create($request);
        $quiz = Quiz::all();
        // dd($objQuiz);
        foreach ($quiz as $index => $item) {
            $quiz_id = $item->ID;
            // dd($item->archive_id);
            if ($objQuiz[$index]['archive_id'] === $item->archive_id) {
                $arrAnswer = [];
                foreach ($objQuiz[$index]['answers'] as $key => $answer) {
                    $question = Question::where('question', $key)->get();
                    if (count($question) > 0) {
                        $question_id = $question[0]->ID;
                        $answerObj['quiz_id'] = $quiz_id;
                        $answerObj['question_id'] = $question_id;
                        $answerObj['answer'] = $answer;
                        array_push($arrAnswer, $answerObj);
                    }
                }
                if ($answerObj) {
                    $request = new Request($arrAnswer);
                    $createdAnswers = (new AnswerController)->create($request);
                }
            }
        }
    }

    public function clear()
    {
        dd('clear base!');
    }
}
