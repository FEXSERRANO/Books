@extends('layouts.app')
@section('content')

<script>
$(document).ready(function(){

	$(document).on("change", "#categorie", function () {
            $.ajax({
                'url': "selector/getBooks",
                'headers': {'X-CSRF-TOKEN': $("#token").val()},
                'type': "POST",
                'data':{categorie:$("#categorie").val()},
                beforeSend: function() {
                   $('#books').html("<div class='box box-danger box-solid'><div class='box-header'><h3 class='box-title'>Cargando...</h3></div><div class='overlay'><i class='fa fa-refresh fa-spin'></i></div></div>");
                },
                success: function (msg) {
                    $('#books').html(msg);

                }

            });
        });

  


});
</script>


<!-- general form elements -->
<div class="panel panel-default">
    <div class="panel-heading">


    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">




<form id='form'>

       <div class="col-md-12 col-md-push-2 input-group input-group-md ">
       <div class="input-group input-group-md">
        <div class="row">

<div class="col-md-7 ">
<select id='categorie' class='form-control'>
    <option disabled selected>Categorias</option>
       @foreach($categories as $categorie)
     <option value="{{$categorie->id}}">{{$categorie->code}} - {{$categorie->name}}</option>
       @endforeach
</select>
</div>


<div class="col-md-5 col-md-push-3 ">
<div id="books">
	<select class='form-control'>
	    <option disabled selected>Libros</option>
     
	</select>
</div>
</div>

<input type="hidden" name="_token" value="{{ csrf_token() }}" id="token">
</form>



         </div>
        </div>
    </div>

@endsection