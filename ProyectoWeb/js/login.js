var intentosFallidos = 0; // Variable para llevar un registro de los intentos fallidos

$("#formulario").validate({
    rules:{
        nombre:{
            required: true,
            rangelength:[3,30]
        },
        contrasena:{
            required: true,
            rangelength:[4,30]
        }
    },
    messages:{
        nombre:{
            required: "Este campo es requerido",
            rangelength: "El nombre debe ser de 4 a 30 caracteres"
        },
        contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres"
        }
    },


    submitHandler: function(form) {
        var nombre = $("#nombre").val();
        var contrasena = $("#contrasena").val();

        if (nombre == "nombre_de_usuario" && contrasena == "contrasena_correcta") {
            form.submit();
            alert("Ha ingresado correctamente!");
        } else {
            intentosFallidos++;
            if (intentosFallidos >= 3) { 
                alert("Ha excedido el límite de intentos. Por favor, intente más tarde.");
                return false; 
            } else {
                alert("Nombre de usuario o contraseña incorrectos. Intento #" + intentosFallidos);
            }
        }
    }
});