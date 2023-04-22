$("#formulario").validate({
    rules:{
        actual_contrasena:{
            required: true,
            rangelength:[4,30]
            
        },
        nueva_contrasena:{
            required: true,
            rangelength:[4,30]

        },
        conf_contrasena:{
            required: true,
            rangelength:[4,30],
            equalTo: "#nueva_contrasena"
        }
        

    },messages:{
        actual_contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            
        },
        nueva_contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            
        },
        conf_contrasena:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            equalTo: "La contraseña debe ser igual a la nueva"
        },
    },


    submitHandler: function(form) {
      form.submit();
      alert("Contraseña cambiada con exito!")
    }
   });