<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Article;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Création de 10 utilisateurs avec chacun 2-5 articles
        User::factory(10)->create()->each(function ($user) {
            Article::factory(rand(2, 5))->create([
                'user_id' => $user->id
            ]);
        });

        // Création d'un utilisateur test avec des articles
        $testUser = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password')
        ]);

        Article::factory(3)->create([
            'user_id' => $testUser->id
        ]);
    }
}
