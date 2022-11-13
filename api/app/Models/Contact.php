<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'contact_key',
        'contact_value',
        'id_user'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
