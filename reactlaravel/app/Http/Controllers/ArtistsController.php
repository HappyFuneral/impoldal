<?php

namespace App\Http\Controllers;

use App\Models\Artists;
use App\Http\Requests\StoreArtistsRequest;
use App\Http\Requests\UpdateArtistsRequest;

class ArtistsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArtistsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Artists $artists)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artists $artists)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArtistsRequest $request, Artists $artists)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artists $artists)
    {
        //
    }
}
