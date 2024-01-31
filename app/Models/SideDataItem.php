<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SideDataItem extends Model
{
    use HasFactory;

    protected $fillable = ['side_data_id', 'name', 'price', 'bonus', 'color', 'image'];

    public function side_data()
    {
        return $this->belongsTo(SideData::class);
    }
}