import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Registrar from '../views/registrar.vue'
import Preferencias from '../views/preferencias.vue'
import Contacto from '../views/contacto.vue'
import Cambiarcontrasena from '../views/cambiarcontrasena.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',

      component: Login
    },
    {
      path: '/registrar',
      name: 'Registrar',

      component: Registrar
    },
    {
      path: '/preferencias',
      name: 'Preferencias',

      component: Preferencias
    },
    {
      path: '/contacto',
      name: 'Contacto',

      component: Contacto
    },
    {
      path: '/index',
      name: 'Inicio',
      component: Index
    },
    {
      path: '/cambiarcontrasena',
      name: 'Cambiarcontrasena',

      component: Cambiarcontrasena
    }
  ]
})

export default router
