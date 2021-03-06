<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
   }
}
