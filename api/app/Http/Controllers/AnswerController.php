<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    //
    public function index($quiz_id = null)
    {
        if (!$quiz_id)
            $data = Answer::all();
        else
            $data = Answer::where('quiz_id', $quiz_id)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        Answer::insert($data);
        return Answer::all();
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Answer::where('ID', $id)->update($data);
        return Answer::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Answer::where('ID', $id)->delete();
        return $delete;
    }
}
