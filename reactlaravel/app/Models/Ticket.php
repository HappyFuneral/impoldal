<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
      'price',
        'title',
        'artists_id',
        'event_id'
    ];

    public  function artists() : HasOne {
        return  $this->hasOne(Artists::class,'artists_id');
    }
    public function event() : HasOne {
        return $this->hasOne(Event::class,'event_id');
    }
}
