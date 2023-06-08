<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <router-link to="/index">Inicio</router-link> 
      <router-link to="/login">Login</router-link> 
      <router-link to="/registrar">Registrarse</router-link>
      <router-link to="/preferencias">Preferencias</router-link> 
      <router-link to="/contacto">Contacto</router-link> 
    </nav>
    <router-view/>
      <footer> @2023 copyright</footer>
  </div>

</template>


<style lang="scss">
  @import './assets/index.scss'
</style>