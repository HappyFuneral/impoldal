<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->dateTime("startDate");
            $table->dateTime("endDate");
            $table->dateTime("date");
            $table->string("description");
            $table->string('status');
            $table->integer("price");
            $table->foreignId("place_id");
            $table->boolean("is_card");
            $table->string("ticket_website")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
