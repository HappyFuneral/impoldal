<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    public function hasRole(string $slug) : bool {

        if (Role::all()->where('id', $this->getAttribute('role_id'))->contains('slug',$slug))
            return true;
        return false;
    }


    /**
     * Get the attributes that should be cast.
     *
     * @return BelongsTo
     */

    public function roleAttr(){
        return $this->getAttribute('role_id');

    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class,"role_id")->withDefault(
            [
                "role" => "USER",
                "slug" => "user"
            ]
        );
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
