<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function show()
    {
        $students = Student::all();
        return $students;
        // response()->json([
        //     'status'=> 200,
        //     'students'=> $students,
        // ]);

    }  
  public function store(Request $request)
    {
        $student = new Student;
        $student->name = $request->input('name');
        $student->address = $request->input('address');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Student Added Succesfully',
        ]);
    }

    public function destroy($id)
    {
        $students = Student::find($id);
        $students->delete();
        return response()->json([
            'status'=> 200,
            'message'=>'Student Deleted Succesfully',
        ]);
    }
}
