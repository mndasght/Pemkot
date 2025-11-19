<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(){
        $data = Hero::where('is_active', true)->first();
        return view ('home', compact('data'));
    }
}
