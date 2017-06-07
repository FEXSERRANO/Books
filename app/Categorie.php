<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    
    public $guarded = ["id"];
    public $timestamps = false;


	
   public function book()
     {
        return $this->hasOne(Book::Class);
     }
    
}
