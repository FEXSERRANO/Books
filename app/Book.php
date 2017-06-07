<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    
    public $guarded = ["id"];
    public $timestamps = false;


 public function categorie() 
   {
       return $this->belongsTo(Categorie::Class);
   }
}
