<template>
    <div class="login-caja">
      <h1>Iniciar sesión</h1>
      <form @submit.prevent="submitForm" id="formulario" name="formulario">
        <label for="nombre">Nombre de usuario:</label>
        <input class="controls" type="text" v-model="nombre" required>
        <br>
        <label for="contrasena">Contraseña:</label>
        <input class="controls" type="password" v-model="contrasena" required>
        <br>
        <a href="cambiarcontrasena.html">¿Has olvidado tu contraseña?</a>
        <input class="botons" type="submit" value="Ingresar">
      </form>
  
      <p>¿No tienes una cuenta? <router-link to="/registrar">Crea una aquí</router-link>.</p>
    </div>
  
    <footer>
      <span><router-link to="/contacto">¿Qué es HiFitness?</router-link></span>
    </footer>
  </template>
  
  <style lang="scss">
  @import '../assets/login.scss';
  </style>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        nombre: '',
        contrasena: ''
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario o realizar la autenticación
        // Puedes acceder a los valores ingresados en "this.nombre" y "this.contrasena"
      }
    }
  };
  </script>