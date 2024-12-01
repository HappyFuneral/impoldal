<?php

namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Place::factory()->create(
          [
              "name" => "Kartal RockPince",
              "address" => "Kartal Skin Disco",
              "website" => ""
          ]
        );
        Place::factory()->create(
            [
                "name" => "S8 Underground Club",
                "address" => "S8 helye",
                "website" => ""
            ]
        );
    }
}
