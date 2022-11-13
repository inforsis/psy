<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    //
    public function index($id = null)
    {
        if (!$id)
            $data = Question::all();
        else
            $data = Question::where('ID', $id)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Question::create($data);
        Question::insert($data);
        return Question::all();
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Question::where('ID', $id)->update($data);
        return Question::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Question::where('ID', $id)->delete();
        return $delete;
    }
}
