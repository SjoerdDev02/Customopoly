<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CornerDataItem extends Model
{
    use HasFactory;

    protected $fillable = ['corner_data_id', 'name', 'image'];

    public function corner()
    {
        return $this->belongsTo(CornerData::class);
    }
}