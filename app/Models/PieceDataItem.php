<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PieceDataItem extends Model
{
    use HasFactory;

    protected $fillable = ['piece_data_id', 'color', 'image'];

    public function piece_data()
    {
        return $this->belongsTo(PieceData::class);
    }
}
