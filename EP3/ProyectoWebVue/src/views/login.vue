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
        <router-link to="/cambiarcontrasena">¿Has olvidado tu contraseña?</router-link>
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
import $ from 'jquery';

export default {
  data() {
    return {
      intentosFallidos: 0,
      nombre: '',
      contrasena: ''
    };
  },
  mounted() {
    this.initializeValidation();
  },
  methods: {
    initializeValidation() {
      const self = this;
      $('#formulario').validate({
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
            rangelength: 'El nombre debe tener entre 4 y 30 caracteres'
          },
          contrasena: {
            required: 'Este campo es requerido',
            rangelength: 'La contraseña debe tener entre 4 y 30 caracteres'
          }
        },
        submitHandler(form) {
          if (self.nombre === 'nombre_de_usuario' && self.contrasena === 'contrasena_correcta') {
            form.submit();
            alert('¡Ha ingresado correctamente!');
          } else {
            self.intentosFallidos++;
            if (self.intentosFallidos >= 3) {
              alert('Ha excedido el límite de intentos. Por favor, intente más tarde.');
              return false;
            } else {
              alert('Nombre de usuario o contraseña incorrectos. Intento #' + self.intentosFallidos);
            }
          }
        }
      });
    },
    submitForm() {
      // Lógica adicional para el envío del formulario si es necesario
    }
  }
};
</script>

