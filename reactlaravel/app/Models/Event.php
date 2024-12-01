<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "startDate",
        "endDate",
        "description",
        "status",
        "date",
        "place_id",
        "is_card",
        "ticket_website",
        "price"
    ];

    public function place() : BelongsTo {
        return $this->belongsTo(Place::class,'place_id');
    }

}
