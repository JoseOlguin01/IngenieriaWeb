$("#formulario").validate({
    rules:{
        nombre_completo:{
            required: true,
            rangelength:[3,30]
        },
        e_mail:{
            required: true,
            rangelength:[4,30],
            email:true,
            endsWith: [".com", ".net", ".cl"]
        },
        asunto:{
            required: true,
            maxlength: 35,
        },
        comentarios:{
            required: true,
            maxlength: 300
        }
    },
    messages:{
        nombre_completo:{
            required: "Este campo es requerido",
            rangelength: "El nombre debe ser de 4 a 30 caracteres"
        },
        e_mail:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            email: "Lo escrito no representa un email",
            endsWith: "El correo electrónico debe terminar en .com, .net o .cl"
        },
        asunto:{
            required: "Este campo es requerido",
            maxlength: "Máximo de 35 caracteres"
        },
        comentarios:{
            required: "Este campo es requerido",
            maxlength: "Límite de 300 caracteres sobrepasado"
        }
    },
    submitHandler: function(form) {
        form.submit();
        alert("Comentario enviado con éxito!");
    }
});


$.validator.addMethod("endsWith", function(value, element, param) {
    for (var i = 0; i < param.length; i++) {
        if (value.endsWith(param[i])) {
            return true;
        }
    }
    return false;
}, "Por favor, ingrese un correo electrónico válido que termine en .com, .net o .cl");