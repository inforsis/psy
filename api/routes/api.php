<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\DiarioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//USER
Route::get('/users/{id?}', [UserController::class, 'index']);
Route::post('/users/create', [UserController::class, 'create']);
Route::put('/users/update/{id}', [UserController::class, 'update']);
Route::delete('/users/delete/{id}', [UserController::class, 'delete']);

//IMPORT
Route::post('/import', [ImportController::class, 'index']);

//PROFILE
Route::get('/profile/{id_user?}', [ProfileController::class, 'index']);
Route::post('/profile/create', [ProfileController::class, 'create']);
Route::put('/profile/update/{id_user}', [ProfileController::class, 'update']);
Route::delete('/profile/delete/{id_user}', [ProfileController::class, 'delete']);

//CONTACT
Route::get('/contact/{id?}', [ContactController::class, 'index']);
Route::post('/contact/create', [ContactController::class, 'create']);
Route::put('/contact/update/{id}', [ContactController::class, 'update']);
Route::delete('/contact/delete/{id}', [ContactController::class, 'delete']);

//QUESTION
Route::get('/question/{id?}', [QuestionController::class, 'index']);
Route::post('/question/create', [QuestionController::class, 'create']);
Route::put('/question/update/{id}', [QuestionController::class, 'update']);
Route::delete('/question/delete/{id}', [QuestionController::class, 'delete']);

//QUIZ
Route::get('/quiz/{id?}', [QuizController::class, 'index']);
Route::post('/quiz/create', [QuizController::class, 'create']);
Route::put('/quiz/update/{id}', [QuizController::class, 'update']);
Route::delete('/quiz/delete/{id}', [QuizController::class, 'delete']);

// ARCHIVE
Route::get('/archive/{id?}', [ArchiveController::class, 'index']);
Route::post('/archive/create', [ArchiveController::class, 'create']);
Route::put('/archive/update/{id}', [ArchiveController::class, 'update']);
Route::delete('/archive/delete/{id}', [ArchiveController::class, 'delete']);

// ANSWER
Route::get('/answer/{id?}', [AnswerController::class, 'index']);
Route::post('/answer/create', [AnswerController::class, 'create']);
Route::put('/answer/update/{id}', [AnswerController::class, 'update']);
Route::delete('/answer/delete/{id}', [AnswerController::class, 'delete']);

//DIARIO
Route::get('/diario/{id?}', [DiarioController::class, 'index']);
