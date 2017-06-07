 //Configuración de las caracteristicas de las tablas principales
//en los index
$(document).ready( function() {

   var table = $('.datatable').dataTable({
      'pagingType': 'full_numbers',
            'language': {
               'search': 'Buscar:',
               'paginate': {
                       "first": "<div title='Primero'> << </div>",
                       "next": "<div title='Siguiente'> > </div>",
                       "previous":"<div title='Anterior'> < </div>",
                       "last": "<div title='Ultimo'> >> </div>"
                 },
              'emptyTable': 'No Hay Datos que Mostrar',
              'info': 'Mostrando _PAGE_ de _PAGES_',
              'loadingRecords': 'Por Favor Espere - Cargando...',
              'displayStart': 'Por Favor Espere - Cargando...',
              'infoFiltered': ' - Filtrado un Total de _MAX_ Registros',
              'lengthMenu': 'Motrar _MENU_ Registros',
              'info': 'Mostrando Página _PAGE_ de _PAGES_ de un Total _TOTAL_ de Registros'

             },
});



  var tableTools = new $.fn.dataTable.TableTools(table, {

                'aButtons': [
                    {
                        'sExtends': 'xls',
                        'sButtonText': 'Excel',
                        'sFileName': 'Data.xls'
                    },
                    /*{
                        'sExtends': 'print',
                        'bShowAll': true,
                    },*/
                    {
                        'sExtends': 'pdf',
                        'bFooter': false
                    },
                    //'copy',
                    //'csv'
                ],
                  'sSwfPath': '/CREDIFON/public/plantilla_administrador/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf'


            });
  $(tableTools.fnContainer()).insertBefore('.datatable');


});