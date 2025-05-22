<?php

namespace App\Http\Controllers;

use App\Models\my_client;
use App\Http\Requests\Storemy_clientRequest;
use App\Http\Requests\Updatemy_clientRequest;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MyClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $clients = my_client::all();
        return Inertia::render('my_clients/index', [
            'clients' => $clients,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('my_clients/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Storemy_clientRequest $request)
    {
        //
        $validated = $request->validated();
        $slug = Str::slug($validated['name']);

        if ($request->hasFile('client_logo')) {
            $path = $request->file('client_logo')->store('logos', 'public');
            $validated['client_logo'] = $path;
        }
        my_client::create([
            'name' => $validated['name'],
            'slug' => $slug,
            'is_project' => $validated['is_project'],
            'self_capture' => $validated['self_capture'],
            'client_prefix' => $validated['client_prefix'],
            'client_logo' => $validated['client_logo'],
            'address' => $validated['address'],
            'phone_number' => $validated['phone_number'],
            'city' => $validated['city'],
        ]);

        return redirect()->route('my_clients.index')->with('success', 'Client created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(my_client $my_client)
    {
        //
        return Inertia::render('my_clients/show', [
            'client' => $my_client,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(my_client $my_client)
    {
        //
        return Inertia::render('my_clients/edit', [
            'client' => $my_client,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatemy_clientRequest $request, my_client $my_client)
    {
        //
        $validated = $request->validated();
        $slug = Str::slug($validated['name']);

        if ($request->hasFile('client_logo')) {
            $path = $request->file('client_logo')->store('logos', 'public');
            $validated['client_logo'] = $path;
        }
        $my_client->update([
            'name' => $validated['name'],
            'slug' => $slug,
            'is_project' => $validated['is_project'],
            'self_capture' => $validated['self_capture'],
            'client_prefix' => $validated['client_prefix'],
            'client_logo' => $validated['client_logo'],
            'address' => $validated['address'],
            'phone_number' => $validated['phone_number'],
            'city' => $validated['city'],
        ]);

        // If the client logo is not updated, keep the old one
        if (!$request->hasFile('client_logo')) {
            $validated['client_logo'] = $my_client->client_logo;
        }
        // Update the slug if the name has changed
        if ($my_client->name !== $validated['name']) {
            $my_client->slug = $slug;
            $my_client->save();
        }

        return redirect()->route('my_clients.index')->with('success', 'Client updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(my_client $my_client)
    {
        //
        $my_client->delete();
        return redirect()->route('my_clients.index')->with('success', 'Client deleted successfully.');
    }
}
