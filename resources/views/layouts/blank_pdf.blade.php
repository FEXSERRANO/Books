<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>FJPUPEL</title>
<style type="text/css">

  body {
  position: relative;
  width: 21cm;
  height: 20.7cm;
  margin: 0;
  color: #001028;
  background: #FFFFFF;
  font-family: Arial, sans-serif;
  font-size: 10px;
  font-family: Arial;


}

 table td {
  font-size: 12px;
}
</style>
  </head>
  <body>
    <header>
      <img src="{{ asset('img/logo_4.jpg') }}" width="130px" height="50px" />
    </header>     





@yield('content')

 <div>

        <div><b>Documento de Carácter Informativo</b></div>
      </div>
    </main>
    <footer>
      Avenida Este 2, Torre Morelos Caracas - Venezuela - Rif:J-30440354-2 - Teléfonos: 0212 576-8073/1537/1857, 0212 574-8213/7174/8213
    </footer>
  </body>
</html>