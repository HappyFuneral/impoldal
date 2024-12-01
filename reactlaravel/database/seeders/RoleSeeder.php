<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::factory()->create([
           "role" => "USER",
           "slug" => "user"
        ]);
        Role::factory()->create([
            "role" => "ADMIN",
            "slug" => "admin"
        ]);
        Role::factory()->create([
           "role" => "SUPER_ADMIN",
           "slug" => "super_admin"
        ]);
    }
}
