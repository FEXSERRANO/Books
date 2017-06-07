    //Personalización de Mensajes Jquery-validation
$(document).ready(function() {
        jQuery.extend(jQuery.validator.messages, {
        required: "<div class='alert btn-danger'>Este campo es obligatorio</div>",
        remote: "<div class='alert btn-danger'>Por favor, rellena este campo.</div>",
        email: "<div class='alert btn-danger'>Por favor, escribe una dirección de correo válida, ejemplo: loquesea@gmail.com</div>",
        url: "<div class='alert btn-danger'>Por favor, escribe una URL válida.</div>",
        date: "<div class='alert btn-danger'>Por favor, escribe una fecha válida.</div>",
        dateISO: "<div class='alert btn-danger'>Por favor, escribe una fecha (ISO) válida.</div>",
        number: "<div class='alert btn-danger'>Por favor, escribe un número válido.</div>",
        digits: "<div class='alert btn-danger'>Por favor, escribe sólo dígitos.</div>",
        creditcard: "<div class='alert btn-danger'>Por favor, escribe un número de tarjeta válido.</div>",
        equalTo: "<div class='alert btn-danger'>Por favor, escribe el mismo valor de nuevo.</div>",
        accept: "<div class='alert btn-danger'>Por favor, escribe un valor con una extensión aceptada.</div>",
        maxlength: jQuery.validator.format("<div class='alert btn-danger'>Por favor, no escribas más de {0} caracteres.</div>"),
        minlength: jQuery.validator.format("<div class='alert btn-danger'>Por favor, no escribas menos de {0} caracteres.</div>"),
        rangelength: jQuery.validator.format("<div class='alert btn-danger'>Por favor, escribe un valor entre {0} y {1} caracteres.</div>"),
        range: jQuery.validator.format("<div class='alert btn-danger'>Por favor, escribe un valor entre {0} y {1}.</div>"),
        max: jQuery.validator.format("<div class='alert btn-danger'>Por favor, escribe un valor menor o igual a {0}.</div>"),
        min: jQuery.validator.format("<div class='alert btn-danger'>Por favor, escribe un valor mayor o igual a {0}.</div>")
    //Personalización de Mensajes Jquery-validation

    });
});
