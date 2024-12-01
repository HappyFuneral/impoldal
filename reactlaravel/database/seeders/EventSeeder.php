<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::factory()->create(
            [
                "title" => "Kartal Rock Pince",
                "startDate" => "2024-11-09T20:00Z",
                "endDate" => "2024-11-09T23:00Z",
                "date" => "2024-11-09T20:00Z",
                "description" => "",
                "is_card" => false,
                "ticket_website" => "",
                "place_id" =>1,
                "price" => "2000"
            ]
        );
        Event::factory()->create(
            [
                "title" => "Kartal Rock Pince",
                "startDate" => "2024-12-21T20:00Z",
                "endDate" => "2024-12-21T23:00Z",
                "date" => "2024-12-21T20:00Z",
                "description" => "",
                "is_card" => false,
                "ticket_website" => "",
                "place_id" => 2,
                "price" => "2000"
            ]
        );
    }
}
