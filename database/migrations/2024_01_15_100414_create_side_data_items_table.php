<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('side_data_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('side_data_id');
            $table->string('name');
            $table->integer('price')->nullable();
            $table->boolean('bonus')->nullable();
            $table->string('image')->nullable();
            $table->integer('color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('side_data_items');
    }
};
