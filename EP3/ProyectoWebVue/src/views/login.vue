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
  
    <footer class="foot_2">
      <span><router-link to="/contacto">¿Qué es HiFitness?</router-link></span>
    </footer>
  </template>
  
  <style scoped lang="scss">
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
      async submitForm() {
        try {
          const response = await fetch('/assets/usuarios.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: this.nombre,
              contrasena: this.contrasena
            })
          });
          if (response.ok) {
            console.log('Datos guardados exitosamente');
            // Realiza la redirección o muestra un mensaje de éxito
          } else {
            console.error('Error al guardar los datos:', response.status);
            // Muestra un mensaje de error
          }
        } catch (error) {
          console.error('Error al guardar los datos:', error);
        }
      }
    }
  };
  </script>