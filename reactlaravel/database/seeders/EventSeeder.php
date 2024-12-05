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
                "title" => "S8 Underground club",
                "startDate" => "2024-11-09 19:00",
                "endDate" => "2024-11-09 23:00",
                "date" => "2024-12-21 19:00",
                "description" => "",
                "is_card" => false,
                "ticket_website" => "https://s8underground.jegyx1.hu/eloadas/3965/impardonne-backdoor-p-ezerocsi-force-zuhano-h?fbclid=IwY2xjawG9_jBleHRuA2FlbQIxMAABHRqLygMyb4l5AEos5ZrT7XXdLIVblTZL_U5_R7vJZwrZUGnuxnxPMqW2DA_aem_1-8NbNDYXR-0b8-fB09KCQ",
                "place_id" => 2,
                "price" => "2000"
            ]
        );
       
    }
}
