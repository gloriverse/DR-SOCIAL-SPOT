<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Resources\LikeCollection;
use Illuminate\Http\Request;

class PostLikeController extends Controller
{
    public function store(Post $post)
    {
        $post->likes()->toggle(auth()->user());

        return new LikeCollection($post->likes);

    }
}
