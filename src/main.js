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
import * as VueGoogleMaps from 'vue2-google-maps'

const routes = [
  { path: '/', component: Home },
  { path: '/expo', component: Expositions },
  { path: '/visite', component: Visite },
  { path: '/billeterie', component: Billeterie },
  { path: '/virtuelle', component: Virtuelle },
]

Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC6rLbK2rkUJYBH8dh0iBYf_MZFJTH6jN4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

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
