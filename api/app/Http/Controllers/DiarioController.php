<?php

namespace App\Http\Controllers;

use App\Http\Controllers\UserController;
use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\DB;

class DiarioController extends Controller
{
    //
    public function index($id = null)
    {
        $data = (new UserController)->index($id);
        foreach ($data as $index => $user) {
            $quiz = (new QuizController)->index($user->ID);
            $user['archive'] = $quiz;

            foreach ($quiz as $i => $item) {
                // $answer = (new AnswerController)->index($item->ID);
                // $user['archive'][$i]['quiz'] = $answer;

                $answer = DB::table('quizzes')
                    ->where('quizzes.ID', '=', $item->ID)
                    ->join('answers', 'quizzes.ID', '=', 'answers.quiz_id')
                    ->join('questions', 'answers.question_id', '=', 'questions.ID')
                    ->select(
                        'quizzes.ID as quiz_id',
                        'quizzes.date as quiz_date',
                        'quizzes.timestamp as quiz_timestamp',
                        'quizzes.created_at as quiz_created_at',
                        'answers.answer',
                        'questions.question',
                        'questions.ID as question_id',
                        'answers.updated_at as answers_updated_at'
                    )
                    ->get();
                $user['archive'][$i]['quiz'] = $answer;
            }
        }
        return $data;
    }
}
