<template>
  <div class="login-caja">
    <h1>Registro</h1>
    <form @submit="submitForm" id="formulario" name="formulario">
      <label for="nombre">Nombre de usuario:</label>
      <input class="controls" type="text" id="nombre" name="nombre" v-model="nombre" required>
      <br>
      <label for="contrasena">Contraseña:</label>
      <input class="controls" type="password" id="contrasena" name="contrasena" v-model="contrasena" required>
      <br>
      <label for="conf_contrasena">Confirmar Contraseña:</label>
      <input class="controls" type="password" id="conf_contrasena" name="conf_contrasena" v-model="confContrasena" required>
      <br>
      <input class="botons" type="submit" value="Registrarse">
    </form>
  </div>

  <footer class="foot">
    <span><router-link to="/contacto">¿Qué es HiFitness?</router-link></span>
  </footer>
</template>

<style scoped lang="scss">
@import '../assets/registrar.scss';
</style>

<script>
import axios from 'axios';
import $ from 'jquery';
import 'jquery-validation';

export default {
  data() {
    return {
      nombre: '',
      contrasena: '',
      confContrasena: ''
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();

      if (this.contrasena !== this.confContrasena) {
        alert('La contraseña debe coincidir con la confirmación de contraseña.');
        return;
      }

      if (this.nombre.trim() === '' || this.contrasena.trim() === '' || this.confContrasena.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/usuarios', {
          nombre: this.nombre,
          contrasena: this.contrasena
        });

        if (response.status === 200) {
          console.log('Usuario registrado exitosamente');

        } else {
          console.error('Error al registrar el usuario:', response.status);

        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }
    }
  },
  mounted() {
    $("#formulario").validate({
      rules: {
        nombre: {
          required: true,
          rangelength: [3, 30]
        },
        contrasena: {
          required: true,
          rangelength: [4, 30]
        },
        conf_contrasena: {
          required: true,
          rangelength: [4, 30],
          equalTo: "#contrasena"
        }
      },
      messages: {
        nombre: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe ser de 4 a 30 caracteres"
        },
        contrasena: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe ser de 4 a 30 caracteres"
        },
        conf_contrasena: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe ser de 4 a 30 caracteres",
          equalTo: "La contraseña debe ser igual a la anterior"
        }
      },
      submitHandler: function(form) {
        form.submit();
        alert("Te has registrado con éxito!");
      }
    });
  }
};
</script>


