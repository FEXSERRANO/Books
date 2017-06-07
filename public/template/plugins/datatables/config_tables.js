 //Configuración de las caracteristicas de las tablas principales
//en los index
$(document).ready( function() {

    $('.data-table').dataTable({
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
        'loadingRecords': 'Por Favor Espere - Cargando...',
        'displayStart': 'Por Favor Espere - Cargando...',
        'infoFiltered': ' - Filtrado un Total de _MAX_ Registros',
        'lengthMenu': 'Mostrar _MENU_ Registros',
        'info': 'Mostrando Página _PAGE_ de _PAGES_ de un Total _TOTAL_ de Registros',
        'infoEmpty':'Mostrando Página _PAGE_ de _PAGES_ de un Total _TOTAL_ de Registros'

      },

      dom : 'lBfrtip',
      buttons : ['excel']

      });

    $('.display').dataTable({
        'paging': false,
        'bFilter': false,
        'lengthMenu': [ [-1], ["All"] ],
        'language': {
            'emptyTable': 'No Hay Datos que Mostrar',
            'loadingRecords': 'Cargando...',
            'processing': 'Sin Datos para Mostrar',
            'displayStart': 'Por Favor Espere - Cargando...',
            'info': 'Mostrando tabla con un Total _TOTAL_ de Registros',
        },

        dom : 'lBfrtip',
        buttons : ['excel', 'pdf']

    });


    $('.pagos').DataTable( {
        'paging': false,
        'bFilter': false,
        'lengthMenu': [ [-1], ["All"] ],
        'language': {
            'emptyTable': 'No Hay Datos que Mostrar',
            'loadingRecords': 'Cargando...',
            'processing': 'Sin Datos para Mostrar',
            'displayStart': 'Por Favor Espere - Cargando...',
            'info': 'Mostrando tabla con un Total _TOTAL_ de Registros',
        },

        dom : 'lBfrtip',
        buttons : ['excel', 'pdf'],
        columnDefs: [
            {
                targets: 1 ,
                visible: false,
                searchable: false
            },
            {
                orderable: false,
                className: 'select-checkbox',
                targets:   0
            }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]]

    } );

    $('.credito').dataTable({
        'paging': false,
        'bFilter': false,
        'lengthMenu': [ [-1], ["All"] ],
        'language': {
            'emptyTable': 'No Hay Datos que Mostrar',
            'loadingRecords': 'Cargando...',
            'processing': 'Sin Datos para Mostrar',
            'displayStart': 'Por Favor Espere - Cargando...',
            'info': 'Mostrando tabla con un Total _TOTAL_ de Registros',
        },

        dom : 'lBfrtip',
        buttons : ['excel']

    });


});
