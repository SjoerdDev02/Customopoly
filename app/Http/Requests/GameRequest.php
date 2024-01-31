<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class GameRequest extends FormRequest
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
            'game.name' => 'required|max:15',
            'game.square_data.square_items.*.image' => 'required',
            'game.city_colors.city_colors.*.color' => 'required|max:7',
            'game.corner_data.corners.*.name' => ['required', 'max:15', function ($attribute, $value, $fail) {
                if (str_word_count($value) > 2) {
                    $fail($attribute . ' must have a maximum of 3 words.');
                }
            }],
            'game.corner_data.corners.*.image' => 'required',
            'game.side_data.*.sides.*.name' => ['required', 'max:15', function ($attribute, $value, $fail) {
                if (str_word_count($value) > 2) {
                    $fail($attribute . ' must have a maximum of 3 words.');
                }
            }],
            'game.side_data.*.sides.*.price' => 'nullable',
            'game.side_data.*.sides.*.color' => 'nullable',
            'game.side_data.*.sides.*.image' => 'nullable',
        ];
    }
}
