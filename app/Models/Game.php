<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Game extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'board_color', 'base_price'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function piece_data(): HasOne
    {
        return $this->hasOne(PieceData::class);
    }

    public function square_data(): HasOne
    {
        return $this->hasOne(SquareData::class);
    }

    public function city_colors(): HasOne
    {
        return $this->hasOne(CityColors::class);
    }

    public function corner_data(): HasOne
    {
        return $this->hasOne(CornerData::class);
    }

    public function side_data(): HasMany
    {
        return $this->hasMany(SideData::class);
    }
}