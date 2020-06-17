import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Billeterie from "./components/Billeterie";
import Visite from "./components/Visite";
import Expositions from "./components/Expositions";
import Virtuelle from "./components/Virtuelle";

const routes = [
  { path: '/', component: Home },
  { path: '/expo', component: Expositions },
  { path: '/visite', component: Visite },
  { path: '/billeterie', component: Billeterie },
  { path: '/virtuelle', component: Virtuelle },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
