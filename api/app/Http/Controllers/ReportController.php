<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;

class ReportController extends Controller
{
    //
    public function index($id = null)
    {
        if (!$id)
            $data = Report::all();
        else
            $data = Report::where('ID', $id)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Report::create($data);
        Report::insert($data);
        return Report::all();
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Report::where('ID', $id)->update($data);
        return Report::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Report::where('ID', $id)->delete();
        return $delete;
    }
}
