$(document).ready(function(){
	$("#creditos").change(event => {
		$.get(`documentocredito/${event.target.value}`, function(res, sta){
			$('#documentoxcredito').append("<option value='" + 0 + "'>Por Favor Espere</option>");
		$("#documentoxcredito").empty();	
                    $.each(res, function(key, element) {
				$('#documentoxcredito').append("<option value='" + key + "'>" + element + "</option>");
			});
			$("#cantidad_documentos").attr("value",$('#documentoxcredito option').length);
		});
	});
});	
