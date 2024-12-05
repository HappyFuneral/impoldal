<?php

use App\Http\Controllers\ProfileController;
use App\Models\Event;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'events' =>
            function() {
            $events = array();
            foreach (Event::all() as $event){
                $events[] = [
                    "title" => $event->title,
                    "startDate" => $event->startDate,
                    "endDate" => $event->endDate,
                    "price" => $event->price,
                    "place" => \App\Models\Place::all()->find($event->place_id)->getAttribute("address"),
                    "isCard" => $event->is_card,
                    "ticketWebsite" => $event->ticket_website
                ];
            }
            return $events;
        }
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::middleware(\App\Http\Middleware\UserHasRoleHandler::class.':super_admin')->group(
        function (){
            Route::resource('/dashboard/events',\App\Http\Controllers\EventController::class);
        }
    );
});

require __DIR__.'/auth.php';
