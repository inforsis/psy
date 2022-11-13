<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $fillable = [
        'ID',
        'daily_timestamp',
        'user_id',
        'quiz_id',
        'created_at',
        'updated_at'
    ];
}
