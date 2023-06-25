<template>
  <div class="login-caja">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="submitForm" id="formulario" name="formulario">
      <label for="nombre">Nombre de usuario:</label>
      <input class="controls" type="text" id="nombre" name="nombre" v-model="nombre" required>
      <br>
      <label for="contrasena">Contraseña:</label>
      <input class="controls" type="password" id="contrasena" name="contrasena" v-model="contrasena" required>
      <br>
      <router-link to="/cambiarcontrasena">¿Has olvidado tu contraseña?</router-link>
      <br>
      <router-link to="/eliminarcuenta">Eliminar una cuenta</router-link>
      <input class="botons" type="submit" value="Ingresar">
    </form>

    <p>¿No tienes una cuenta? <router-link to="/registrar">Crea una aquí</router-link>.</p>
  </div>

  <footer class="foot_2">
    <span><router-link to="/contacto">¿Qué es HiFitness?</router-link></span>
  </footer>
</template>

<style scoped lang="scss">
@import '../assets/login.scss';
</style>

<script>
import axios from 'axios';
import $ from 'jquery';
import 'jquery-validation';

export default {
  data() {
    return {
      intentosFallidos: 0,
      nombre: '',
      contrasena: ''
    };
  },
  mounted() {
    const self = this;
    $.validator.setDefaults({
      errorPlacement: function (error, element) {
        error.insertAfter(element);
      }
    });

    $("#formulario").validate({
      rules: {
        nombre: {
          required: true,
          rangelength: [3, 30]
        },
        contrasena: {
          required: true,
          rangelength: [4, 30]
        }
      },
      messages: {
        nombre: {
          required: 'Este campo es requerido',
          rangelength: 'El nombre debe tener entre 3 y 30 caracteres'
        },
        contrasena: {
          required: 'Este campo es requerido',
          rangelength: 'La contraseña debe tener entre 4 y 30 caracteres'
        }
      },
      submitHandler(form) {
        self.login();
      }
    });
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://localhost:3000/usuarios');
        const usuarios = response.data;

        const usuarioEncontrado = usuarios.find(
          usuario =>
            usuario.nombre === this.nombre && usuario.contrasena === this.contrasena
        );

        if (usuarioEncontrado) {
          alert('¡Ha ingresado correctamente!');

        } else {
          this.intentosFallidos++;
          if (this.intentosFallidos >= 3) {
            alert('Ha excedido el límite de intentos. Por favor, intente más tarde.');
          } else {
            alert('Nombre de usuario o contraseña incorrectos. Intento #' + this.intentosFallidos);
          }
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    submitForm() {

    }
  }
};
</script>






