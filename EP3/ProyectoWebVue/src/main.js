import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/bootstrap.min.css'
import '../src/router/bootstrap.bundle.min.js'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap'

createApp(App).use(router).mount('#app')


