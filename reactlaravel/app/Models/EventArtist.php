<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EventArtist extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'artists_id'
    ];

    protected function event() : HasOne {
        return $this->hasOne(Event::class,"event_id");
    }

    protected function artists() : HasOne{
        return $this->hasOne(Artists::class, 'artists_id');
    }
}
