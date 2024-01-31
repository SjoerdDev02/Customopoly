<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Game>
 */
class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $default_game_data = config('game');
        
        return [
            'name' => $default_game_data['default_game_data']['name'],
            'board_color' => $default_game_data['default_game_data']['board_color'],
            'base_price' => $default_game_data['default_game_data']['base_price'],
        ];
    }
}
