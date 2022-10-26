<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::post('/add-student',[StudentController::class, 'store']);
Route::get('student',[StudentController::class,'show']);
Route::delete('delete-student/{id}',[StudentController::class,'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
