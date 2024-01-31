<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\ProfileController;
use App\Models\Game;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    return Inertia::render('GamesIndex', [
        'games' => Game::where('user_id', Auth::id())->get(),
    ]);
})->name('games.index');

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/dashboard/{id}', [GameController::class, 'index'])->name('games.index');
    Route::get('/edit/{id}', [GameController::class, 'edit'])->name('games.edit');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';