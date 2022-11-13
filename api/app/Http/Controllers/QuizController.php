<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\Report;

class QuizController extends Controller
{
    //
    public function index($user_id = null)
    {
        if (!$user_id)
            $data = Quiz::all();
        else {
            $report_id = Report::where('user_id', $user_id)->get()[0]->ID;
            $data = Quiz::where('report_id', $report_id)->get();
        }

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Quiz::create($data);

        foreach ($data as $index => $item) {
            $answers['data'] = $data[$index]['answers'];
            unset($data[$index]['answers']);
        }

        Quiz::insert($data);
        // return Quiz::latest()->first();
        $quiz = Quiz::all();

        return $quiz;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Quiz::where('ID', $id)->update($data);
        return Quiz::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Quiz::where('ID', $id)->delete();
        return $delete;
    }
}
