<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;

class UserConteller extends Controller
{
    //
    function show()
    {
        return DB::Select('select * from contactus');
        // $data=DB::Select('select * from contactus');
        // return view('hello',['contactus'=>$data]);
    }
}
