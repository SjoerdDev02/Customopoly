<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CityColors extends Model
{
    use HasFactory;

    protected $fillable = ['game_id'];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function city_colors(): HasMany
    {
        return $this->hasMany(CityColorItem::class);
    }
}