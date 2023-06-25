<template>
    <div class="login-caja">
      <h1>Eliminar Cuenta</h1>
      <form @submit.prevent="submitForm" id="formulario" name="formulario">
        <label for="nombre">Nombre de usuario:</label>
        <input class="controls" type="text" id="nombre" name="nombre" v-model="nombre" required>
        <br>
        <label for="contrasena">Contraseña:</label>
        <input class="controls" type="password" id="contrasena" name="contrasena" v-model="contrasena" required>
        <br>
        <input class="botons" type="submit" value="Eliminar">
      </form>
  
    </div>
  
    <footer class="foot_2">
      
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
            self.eliminarCuenta();
        }
      });
    },
    methods: {
    async eliminarCuenta() {
      try {
        const response = await axios.delete('http://localhost:3000/usuarios', {
          data: {
            nombre: this.nombre,
            contrasena: this.contrasena,
          },
        });

        if (response.status === 200) {
          alert('Cuenta eliminada exitosamente');
        } else {
          alert('Error al eliminar la cuenta');
        }
      } catch (error) {
        console.error('Error al eliminar la cuenta:', error);
      }
    },
    submitForm() {},
  },
};
</script>