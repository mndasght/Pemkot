<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home']);
Route::get('/sejarah', [HomeController::class, 'sejarah']);
Route::get('/wisata', [HomeController::class, 'wisata']);
Route::get('/wisatadetail', [HomeController::class, 'detail_wisata']);
