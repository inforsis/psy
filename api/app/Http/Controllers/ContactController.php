<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index($id_user = null)
    {
        if (!$id_user)
            $data = Contact::all();
        else
            $data = Contact::where('id_user', $id_user)->get();

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        // Contact::create($data);
        Contact::insert($data);
        return Contact::all();
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        Contact::where('ID', $id)->update($data);
        return Contact::where('ID', $id)->get();
    }

    public function delete($id)
    {
        $delete = Contact::where('ID', $id)->delete();
        return $delete;
    }
}
