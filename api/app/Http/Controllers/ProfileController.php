<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;

class ProfileController extends Controller
{
    //
    public function index($id_user = null)
    {
        if (!$id_user)
            $data = Profile::all();
        else
            $data = Profile::where('id_user', $id_user)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Profile::create($data);
        Profile::insert($data);
        return Profile::all();
    }

    public function update(Request $request, $id_user)
    {
        $data = $request->all();
        Profile::where('id_user', $id_user)->update($data);
        return Profile::where('id_user', $id_user)->get();
    }

    public function delete($id_user)
    {
        $delete = Profile::where('id_user', $id_user)->delete();
        return $delete;
    }
}
