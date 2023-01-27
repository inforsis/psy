<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    use HasFactory;
    protected $fillable = [
        'ID',
        'user_id',
        'quiz_id',
        'created_at',
        'updated_at'
    ];
}
