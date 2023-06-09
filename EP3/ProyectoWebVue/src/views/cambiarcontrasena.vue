<template>
    <div class="login-caja">
      <h1>Cambio de Contraseña</h1>

      <form @submit.prevent="submitForm" id="formulario" name="formulario">
        <label for="actual_contrasena">Contraseña actual:</label>
        <input class="controls" type="password" v-model="actualContrasena" required>
        <br>
        <label for="nueva_contrasena">Nueva Contraseña:</label>
        <input class="controls" type="password" v-model="nuevaContrasena" required>
        <br>
        <label for="conf_contrasena">Confirmar Contraseña:</label>
        <input class="controls" type="password" v-model="confContrasena" required>
        <br>
        <input class="botons" type="submit" value="Aceptar">
        <router-link to="/login">Volver a ingresar</router-link>
      </form>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        actualContrasena: '',
        nuevaContrasena: '',
        confContrasena: '',
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
      },
    },
  };
  </script>

<style lang="scss">
  @import '../assets/login.scss';
</style>