<?php

namespace App\Http\Controllers;

use App\Http\Requests\GameRequest;
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
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $games = Game::where('user_id', $id)->get();

        return Inertia::render('GamesIndex', [
            'games' => $games,
        ]);
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
    public function store($id)
    {        
        $default_game_data = config('game');

        $game = Game::create([
            'user_id' => $id,
            'name' => 'Customopoly',
            'board_color' => $default_game_data['default_game_data']['board_color'],
            'base_price' => $default_game_data['default_game_data']['base_price'],
        ]);

        $piece_data = PieceData::create([
            'game_id' => $game->id,
        ]);

        for ($i = 0; $i < 6; $i++) {
            PieceDataItem::create([
                'piece_data_id' => $piece_data->id,
                'image' => $default_game_data['default_piece_data'][$i]['image'],
                'color' => $default_game_data['default_piece_data'][$i]['color'],
            ]);
        }

        $square_data = SquareData::create([
            'game_id' => $game->id,
        ]);

        for ($j = 0; $j < 3; $j++) {
            SquareDataItem::create([
                'square_data_id' => $square_data->id,
                'image' => $default_game_data['default_square_data'][$j]['image'],
                'color' => $default_game_data['default_square_data'][$j]['color'],
            ]);
        }

        $city_colors = CityColors::create([
            'game_id' => $game->id,
        ]);

        for ($k = 0; $k < 8; $k++) {
            CityColorItem::create([
                'city_colors_id' => $city_colors->id,
                'color' => $default_game_data['default_city_colors'][$k],
            ]);
        }

        $corner_data = CornerData::create([
            'game_id' => $game->id,
        ]);

        for ($l = 0; $l < 4; $l++) {
            CornerDataItem::create([
                'corner_data_id' => $corner_data->id,
                'name' => $default_game_data['default_corner_data'][$l]['name'],
                'image' => $default_game_data['default_corner_data'][$l]['image'],
            ]);
        }

        for ($m = 0; $m < 4; $m++) {
            $side_data = SideData::create([
                'game_id' => $game->id,
            ]);
    
            for ($n = 0; $n < 9; $n++) {
                SideDataItem::create([
                    'side_data_id' => $side_data->id,
                    'name' => $default_game_data['default_side_data'][$m][$n]['name'],
                    'price' => $default_game_data['default_side_data'][$m][$n]['price'] ?? null,
                    'bonus' => $default_game_data['default_side_data'][$m][$n]['bonus'] ?? null,
                    'color' => $default_game_data['default_side_data'][$m][$n]['color'] ?? null,
                    'image' => $default_game_data['default_side_data'][$m][$n]['image'] ?? null,
                ]);
            }
        }

        return Inertia::location(route('games.edit', ['id' => $game->id]));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $game = Game::with(['piece_data.pieces', 'square_data.square_items', 'city_colors.city_colors', 'corner_data.corners', 'side_data.sides'])->find($id);

        return response()->json(['game' => $game]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $game = Game::with(['piece_data.pieces', 'square_data.square_items', 'city_colors.city_colors', 'corner_data.corners', 'side_data.sides'])->find($id);

        return Inertia::render('GamesEdit', [
            'game' => $game,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GameRequest $request, $id)
    {
        try {
            $updatedGameData = $request->input('game');
            
            $game = Game::with(['piece_data.pieces', 'square_data.square_items', 'city_colors.city_colors', 'corner_data.corners', 'side_data.sides'])->find($id);
    
            if (!$game) {
                return response()->json(['error' => 'Game not found'], 404);
            }

            $game->name = $updatedGameData['name'];
            $game->board_color = $updatedGameData['board_color'];
            $game->base_price = $updatedGameData['base_price'];

            foreach($updatedGameData['piece_data']['pieces'] as $index => $piece) {
                $game->piece_data->pieces[$index]->image = $piece['image'];
                $game->piece_data->pieces[$index]->color = $piece['color'];
            }
    
            foreach ($updatedGameData['square_data']['square_items'] as $index => $square_item) {
                $game->square_data->square_items[$index]->image = $square_item['image'];
                $game->square_data->square_items[$index]->color = $square_item['color'];
            }
    
            foreach ($updatedGameData['city_colors']['city_colors'] as $index => $color) {
                $game->city_colors->city_colors[$index]->color = $color['color'];
            }
    
            foreach ($updatedGameData['corner_data']['corners'] as $index => $corner) {
                $game->corner_data->corners[$index]->name = $corner['name'];
                $game->corner_data->corners[$index]->image = $corner['image'];
            }
    
            for ($i = 0; $i < 4; $i++) {
                foreach ($updatedGameData['side_data'][$i]['sides'] as $index => $side_item) {
                    $game->side_data[$i]->sides[$index]->name = $side_item['name'];
                    $game->side_data[$i]->sides[$index]->price = $side_item['price'];
                    $game->side_data[$i]->sides[$index]->image = $side_item['image'];
                }
            }
    
            $game->push();
    
            return response()->json('success');
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Error updating game'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unexpected error'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $game = Game::with(['piece_data.pieces', 'square_data.square_items', 'city_colors.city_colors', 'corner_data.corners', 'side_data.sides'])->find($id);

        $game->piece_data->pieces->each->delete();
        $game->piece_data->delete();

        $game->square_data->square_items->each->delete();
        $game->square_data->delete();
    
        $game->city_colors->city_colors->each->delete();
        $game->city_colors->delete();
    
        $game->corner_data->corners->each->delete();
        $game->corner_data->delete();

        for ($i = 0; $i < 4; $i++) {
            $game->side_data[$i]->sides->each->delete();
            $game->side_data[$i]->delete();
        }
            
        $game->delete();

        return Inertia::location(route('games.index', ['id' => $game->user_id]));
    }
}