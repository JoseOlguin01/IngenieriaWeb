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

      try {
        const response = await axios.post('http://localhost:3000/usuarios', {
          nombre: this.nombre,
          contrasena: this.contrasena
        });

        if (response.status === 200) {
          console.log('Usuario registrado exitosamente');
          // Realiza la redirección o muestra un mensaje de éxito
        } else {
          console.error('Error al registrar el usuario:', response.status);
          // Muestra un mensaje de error
        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }
    }
  }
};
</script>