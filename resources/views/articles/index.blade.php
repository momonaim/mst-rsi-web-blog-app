@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @auth
                    <a href="{{ route('articles.create') }}" class="btn btn-primary mb-3">Nouvel article</a>
                @endauth

                @foreach($articles as $article)
                    <div class="card mb-3">
                        <div class="card-header">
                            <h4>{{ $article->title }}</h4>
                            <small class="text-muted">Par {{ $article->user->name }}</small>
                        </div>
                        <div class="card-body">
                            <p>{{ $article->content }}</p>
                            @can('update', $article)
                                <div class="d-flex">
                                    <a href="{{ route('articles.edit', $article) }}"
                                        class="btn btn-sm btn-outline-secondary mr-2">Modifier</a>
                                    <form action="{{ route('articles.destroy', $article) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger">Supprimer</button>
                                    </form>
                                </div>
                            @endcan
                        </div>
                    </div>
                @endforeach

                {{ $articles->links() }}
            </div>
        </div>
    </div>
@endsection
