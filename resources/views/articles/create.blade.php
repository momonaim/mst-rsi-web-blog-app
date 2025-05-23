@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ isset($article) ? 'Modifier l\'article' : 'Nouvel article' }}</div>
                    <div class="card-body">
                        <form method="POST"
                            action="{{ isset($article) ? route('articles.update', $article) : route('articles.store') }}">
                            @csrf
                            @if(isset($article))
                                @method('PUT')
                            @endif

                            <div class="form-group">
                                <label for="title">Titre</label>
                                <input type="text" class="form-control" id="title" name="title"
                                    value="{{ old('title', $article->title ?? '') }}" required>
                            </div>

                            <div class="form-group">
                                <label for="content">Contenu</label>
                                <textarea class="form-control" id="content" name="content" rows="5"
                                    required>{{ old('content', $article->content ?? '') }}</textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
