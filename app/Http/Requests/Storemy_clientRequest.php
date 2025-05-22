<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Storemy_clientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => 'required|string|max:250',
            'is_project' => 'nullable|string|max:30',
            'self_capture' => 'nullable|boolean',
            'client_prefix' => 'required|string|max:4',
            'client_logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'address' => 'nullable|string',
            'phone_number' => 'nullable|string|max:50',
            'city' => 'nullable|string|max:50',
        ];
    }
}
