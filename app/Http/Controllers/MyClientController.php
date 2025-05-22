<?php

namespace App\Http\Controllers;

use App\Models\my_client;
use App\Http\Requests\Storemy_clientRequest;
use App\Http\Requests\Updatemy_clientRequest;

class MyClientController extends Controller
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
    public function store(Storemy_clientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(my_client $my_client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(my_client $my_client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatemy_clientRequest $request, my_client $my_client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(my_client $my_client)
    {
        //
    }
}
