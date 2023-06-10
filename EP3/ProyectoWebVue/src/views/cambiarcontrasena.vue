<template>
<div class="login-caja">
            <h1>Cambio de Contraseña</h1>

            <form action="" id="formulario" name="formulario">
                <label for="actual_contrasena">Contraseña actual:</label>
                <input class="controls" type="password" id="actual_contrasena" name="actual_contrasena" required>
                <br>
                <label for="nueva_contrasena">Nueva Contraseña:</label>
                <input class="controls" type="password" id="nueva_contrasena" name="nueva_contrasena" required>
                <br>
                <label for="conf_contrasena">Confirmar Contraseña:</label>
                <input class="controls" type="password" id="conf_contrasena" name="conf_contrasena" required>
                <br>
                <input class="botons" type="submit" value="Aceptar">
                <router-link to="/login">Volver a ingresar</router-link>
              </form>

        </div>
</template>

<script>
import $ from 'jquery';
import 'jquery-validation';

export default {
mounted(){
  const form = $('#formulario');
  form.validate({
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
}

};
</script>





<style lang="scss">
  @import '../assets/login.scss';
</style>