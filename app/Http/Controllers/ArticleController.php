<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class ArticleController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $articles = Article::with('user:id,name')->latest()->paginate(10);

        return Inertia::render('Articles/Index', [
            'articles' => $articles,
            'authUserId' => optional(request()->user())->id,
        ]);
    }

    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $request->user()->articles()->create($validated);

        return redirect()->route('articles.index');
    }

    public function edit(Article $article)
    {
        $this->authorize('update', $article);

        return Inertia::render('Articles/Edit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $this->authorize('update', $article);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $article->update($validated);

        return redirect()->route('articles.index');
    }

    public function destroy(Article $article)
    {
        $this->authorize('delete', $article);

        $article->delete();

        return redirect()->route('articles.index');
    }
}
