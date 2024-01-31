<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CityColorItem extends Model
{
    use HasFactory;

    protected $fillable = ['city_colors_id', 'color'];

    public function city_color()
    {
        return $this->belongsTo(CityColors::class);
    }
}