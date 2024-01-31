<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SquareDataItem extends Model
{
    use HasFactory;

    protected $fillable = ['square_data_id', 'image', 'color'];

    public function square_data()
    {
        return $this->belongsTo(SquareData::class);
    }
}
