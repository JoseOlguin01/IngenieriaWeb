<template>
  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/index">
            <img id="logo" src="../assets/images/logo.png" alt="">
            <span>HiFitness</span>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/index">Inicio</router-link>
              </li>
              <li class="nav-item" v-if="!isLoggedIn || isAdmin">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item" v-if="!isLoggedIn || isAdmin">
                <router-link class="nav-link" to="/registrar">Registrarse</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn && isAdmin">
                <router-link class="nav-link" to="/eliminarcuenta">Eliminar cuenta</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn || isAdmin">
                <router-link class="nav-link" to="/preferencias">Preferencias</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn || isAdmin">
                <router-link class="nav-link" to="/contacto">Contactanos</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <button class="nav-link" @click="logout">Cerrar sesión</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getRole', 'isLoggedIn', 'isAdmin']),
  },
  methods: {
    ...mapActions(['setRole', 'setLoggedIn']),
    logout() {
      this.setRole('usuario');
      this.setLoggedIn(false);
      this.$router.push('/login');
    },
  },
};
</script>
