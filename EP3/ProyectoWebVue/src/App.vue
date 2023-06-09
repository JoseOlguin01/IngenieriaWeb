<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
</script>

<template>
  <Header/>
  <router-view/>
</template>


<style lang="scss">
  @import './assets/index.scss'
</style>