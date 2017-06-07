
<select id='books' class='form-control'>
    <option disabled selected>Libros</option>
       @foreach($books as $book)
     <option value="{{$book->id}}">{{$book->code}} - {{$book->name}}</option>
       @endforeach
</select>


