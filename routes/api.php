<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\ImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['web', 'auth:sanctum'])->group(function () {
    Route::get('/games/{id}', [GameController::class, 'show'])->name('games.show');
    Route::post('/games/{id}', [GameController::class, 'store'])->name('games.store');
    Route::put('/games/{id}', [GameController::class, 'update'])->name('games.update');
    Route::delete('/games/{id}', [GameController::class, 'destroy'])->name('games.delete');
    Route::post('/storeImage', [ImageController::class, 'store'])->name('image.store');
});