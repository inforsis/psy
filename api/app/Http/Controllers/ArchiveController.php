<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Archive;

class ArchiveController extends Controller
{
    //
    static function index($id = null)
    {
        if (!$id)
            $data = Archive::all();
        else
            $data = Archive::where('ID', $id)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Archive::create($data);
        Archive::insert($data);
        return Archive::all();
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Archive::where('ID', $id)->update($data);
        return Archive::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Archive::where('ID', $id)->delete();
        return $delete;
    }
}
