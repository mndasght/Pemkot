<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $table = 'heroes';
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'image',
        'is_active',
    ];
    protected static function booted()
    {
        static::saving(function ($hero) {
            if ($hero->is_active) {
                static::where('id', '!=', $hero->id)
                    ->update(['is_active' => false]);
            }
        });
    }
}
