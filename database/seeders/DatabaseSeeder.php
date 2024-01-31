<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CityColorItem;
use App\Models\CityColors;
use App\Models\CornerData;
use App\Models\CornerDataItem;
use App\Models\Game;
use App\Models\PieceData;
use App\Models\PieceDataItem;
use App\Models\SideData;
use App\Models\SideDataItem;
use App\Models\SquareData;
use App\Models\SquareDataItem;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $default_game_data = config('game');

        $users = User::factory(2)->create();

        foreach ($users as $user) {
            $games = Game::factory(2)->create([
                'user_id' => $user->id,
            ]);

            foreach ($games as $game) {
                $piece_data = PieceData::factory()->create([
                    'game_id' => $game->id,
                ]);

                for ($i = 0; $i < 6; $i++) {
                    PieceDataItem::factory()->create([
                        'piece_data_id' => $piece_data->id,
                        'image' => $default_game_data['default_piece_data'][$i]['image'],
                        'color' => $default_game_data['default_piece_data'][$i]['color'],
                    ]);
                }

                $square_data = SquareData::factory()->create([
                    'game_id' => $game->id,
                ]);

                for ($j = 0; $j < 3; $j++) {
                    SquareDataItem::factory()->create([
                        'square_data_id' => $square_data->id,
                        'color' => $default_game_data['default_square_data'][$j]['color'],
                        'image' => $default_game_data['default_square_data'][$j]['image'],
                    ]);
                }

                $city_colors = CityColors::factory()->create([
                    'game_id' => $game->id,
                ]);

                for ($k = 0; $k < 8; $k++) {
                    CityColorItem::factory()->create([
                        'city_colors_id' => $city_colors->id,
                        'color' => $default_game_data['default_city_colors'][$k],
                    ]);
                }

                $corner_data = CornerData::factory()->create([
                    'game_id' => $game->id,
                ]);

                for ($l = 0; $l < 4; $l++) {
                    CornerDataItem::factory()->create([
                        'corner_data_id' => $corner_data->id,
                        'name' => $default_game_data['default_corner_data'][$l]['name'],
                        'image' => $default_game_data['default_corner_data'][$l]['image'],
                    ]);
                }

                $side_data = SideData::factory(4)->create([
                    'game_id' => $game->id,
                ]);

                foreach ($side_data as $index => $side) {
                    for ($m = 0; $m < 8; $m++) {
                        SideDataItem::factory()->create([
                            'side_data_id' => $side->id,
                            'name' => $default_game_data['default_side_data'][$index][$m]['name'],
                            'price' => $default_game_data['default_side_data'][$index][$m]['price'] ?? null,
                            'bonus' => $default_game_data['default_side_data'][$index][$m]['bonus'] ?? null,
                            'color' => $default_game_data['default_side_data'][$index][$m]['color'] ?? null,
                            'image' => $default_game_data['default_side_data'][$index][$m]['image'] ?? null,
                        ]);
                    }
                }
            }
        }
    }
}