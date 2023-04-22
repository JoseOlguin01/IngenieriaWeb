$("#formulario").validate({
    rules:{
        nombre_completo:{
            required: true,
            rangelength:[3,30]
            
        },
        e_mail:{
            required: true,
            rangelength:[4,30],
            email:true

        },
        asunto:{
            required: true,
            maxlength: 35,
        },
        comentarios:{
            required: true,
            maxlength: 300
        }

    },messages:{
        nombre_completo:{
            required: "Este campo es requerido",
            rangelength: "El nombre debe ser de 4 a 30 caracteres",
            
        },
        e_mail:{
            required: "Este campo es requerido",
            rangelength: "La contraseña debe ser de 4 a 30 caracteres",
            email: "Lo escrito no representa un email"
        },
        asunto:{
            required: "Este campo es requerido",
            maxlength: "Maximo de 35 caracteres"
        },
        comentarios:{
            required: "Este campo es requerido",
            maxlength: "Limite de 300 caracteres sobrepasado"
        }

    },


    submitHandler: function(form) {
      form.submit();
      alert("Comentario enviado con exito!")
    }
   });