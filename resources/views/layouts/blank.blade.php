<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CREDIFON</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.4 -->
    {!!Html::style('plantilla_administrador/bootstrap/css/bootstrap.min.css') !!}
    <!-- Theme style -->
    {!!Html::style('plantilla_administrador/dist/css/AdminLTE.min.css') !!}
    {!!Html::style('plantilla_administrador/plugins/iCheck/square/blue.css') !!}

    <!-- Font Awesome Icons-->
    {!!Html::style('plantilla_administrador/dist/css/font-awesome/css/font-awesome.min.css') !!}



    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="login-page">
       <div class="login-box">
         @include('alerts.alerts')
         @include('alerts.errors')
         @include('alerts.success')
         @yield('content')
        <div class="social-auth-links text-center">


      <!--<a href="#">Olvido su Clave</a><br>-->
        <!--<a href="register.html" class="text-center">Registrate</a>-->

      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->



    <!-- jQuery 2.1.4 -->
    {!! Html::script('plantilla_administrador/plugins/jQuery/jQuery-2.1.4.min.js'); !!}
    {!! Html::script('plantilla_administrador/bootstrap/js/bootstrap.min.js'); !!}
    {!! Html::script('plantilla_administrador/plugins/iCheck/icheck.min.js'); !!}


    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
    </script>

     <!-- Sección para cargar las scripts-->
        @yield('scripts')
  </body>
</html>


