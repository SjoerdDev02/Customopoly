<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SideData extends Model
{
    use HasFactory;

    protected $fillable = ['game_id'];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function sides(): HasMany
    {
        return $this->HasMany(SideDataItem::class);
    }
}