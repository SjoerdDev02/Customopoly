<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);
    
            $image = $request->file('image');
    
            $filename = uniqid() . '.' . $image->getClientOriginalExtension();
    
            Storage::disk('public')->put('/images/uploads/' . $filename, file_get_contents($image));
    
            return response()->json(['filename' => $filename], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}