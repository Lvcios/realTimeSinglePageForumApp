<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Question extends Model
{
    public function getRouteKeyName(){
        return 'slug';
    }

    //al hacer post solo toma esos campos
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];


    //ignora la regla de arriba y agarra todo como venga
    //protected $guarded = []

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function category(){
        return $this->belongsTo(Cateogry::class);
    }

    public function getPathAttribute(){
        return asset("api/question/$this->slug");
    }
}
