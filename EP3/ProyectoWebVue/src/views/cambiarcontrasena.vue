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
import axios from 'axios';
import $ from 'jquery';
import 'jquery-validation';

export default {
  mounted() {
    const self = this;
    $.validator.setDefaults({
      errorPlacement: function (error, element) {
        error.insertAfter(element);
      }
    });

    $("#formulario").validate({
      rules: {
        actual_contrasena: {
          required: true,
          rangelength: [4, 30]
        },
        nueva_contrasena: {
          required: true,
          rangelength: [4, 30]
        },
        conf_contrasena: {
          required: true,
          rangelength: [4, 30],
          equalTo: "#nueva_contrasena"
        }
      },
      messages: {
        actual_contrasena: {
          required: 'Este campo es requerido',
          rangelength: 'La contraseña debe tener entre 4 y 30 caracteres'
        },
        nueva_contrasena: {
          required: 'Este campo es requerido',
          rangelength: 'La contraseña debe tener entre 4 y 30 caracteres'
        },
        conf_contrasena: {
          required: 'Este campo es requerido',
          rangelength: 'La contraseña debe tener entre 4 y 30 caracteres',
          equalTo: 'La contraseña debe ser igual a la nueva'
        }
      },
      submitHandler(form) {
        self.cambiarContrasena();
      }
    });
  },
  methods: {
    async cambiarContrasena() {
      try {
        const idUsuario = 1;

        const actualContrasena = $("#actual_contrasena").val();
        const nuevaContrasena = $("#nueva_contrasena").val();

        const response = await axios.put(`http://localhost:3000/usuarios/${idUsuario}`, {
          actualContrasena: actualContrasena,
          nuevaContrasena: nuevaContrasena
        });

        if (response.status === 200) {
          alert('Contraseña cambiada con éxito!');
        } else {
          console.alert('Error al cambiar la contraseña');
        }
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
      }
    },

    submitForm() {

    }
  }
};
</script>




<style lang="scss">
  @import '../assets/login.scss';
</style>