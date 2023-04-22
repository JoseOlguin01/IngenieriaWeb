$("#formulario").validate({
    rules:{
        nombre:{
            required: true,
            rangelength:[3,30]
            
        },
        contrasena:{
            required: true,
            rangelength:[4,30]

        },
        conf_contrasena:{
            required: true,
            rangelength:[4,30],
            equalTo: "#contrasena"
        }
        

    },messages:{
        nombre:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            
        },
        contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            
        },
        conf_contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            equalTo: "La contraseña debe ser igual a la anterior"
        },
    },


    submitHandler: function(form) {
      form.submit();
      alert("Te has registrado con exito!")
    }
   });