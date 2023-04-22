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

    },messages:{
        nombre:{
            required: "Este campo es requerido",
            rangelength: "El nombre debe ser de 4 a 30 caracteres",
            
        },
        contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            
        },

    },


    submitHandler: function(form) {
      form.submit();
      alert("Ha ingresado correctamente!")
    }
   });