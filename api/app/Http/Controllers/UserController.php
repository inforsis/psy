<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;

class UserController extends Controller
{
    //
    public function index($id = null)
    {
        if (!$id)
            $data = User::all();
        else
            $data = User::find($id);

        return $data;
    }

    static function create(Request $request)
    {
        $data = $request->all();
        $now = strval(time());

        foreach ($data as $index => $item) {
            $data[$index]['user_activation_key'] = md5($now);
            $data[$index]['user_role'] = "paciente";
            $data[$index]['user_password'] = substr(md5(uniqid($now)), 0, 6);
            $dataProfile[$index]['profile_name'] = $data[$index]['profile_name'];
            $dataProfile[$index]['user_login'] =   $data[$index]['user_login'];
            unset($data[$index]['profile_name']);
        }

        // User::create($data);
        User::insert($data);

        $users = User::all();

        $obj = [];
        $objReport = [];
        $profileIndex = 0;
        foreach ($dataProfile as $index => $item) {
            //profiles
            $user_id = User::where('user_login', $item['user_login'])->get()[0]->ID;
            $profile['profile_name'] = $item['profile_name'];
            $profile['id_user'] = $user_id;
            array_push($obj, $profile);
            $profileIndex++;

            //REPORT/DIÁRIO
            $report['user_id'] = $user_id;
            array_push($objReport, $report);
        }
        $request = new Request($obj);
        $createdProfiles = (new ProfileController)->create($request);

        $request = new Request($objReport);
        $createdReport = (new ReportController)->create($request);

        return $users;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        User::where('ID', $id)->update($data);
        return User::find($id);
    }

    public function delete($id)
    {
        $delete = User::where('ID', $id)->delete();
        return $delete;
    }
}
