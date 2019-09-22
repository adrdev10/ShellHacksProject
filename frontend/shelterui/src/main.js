import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import DashBoard from './components/DashBoard.vue'
import LandingPage from './components/LandingPage.vue'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(BootstrapVue)
Vue.use(VueRouter)


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBxJZDZhqRleL7l9ar5iNZ_JbsBdEa0un8",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = true;

const router = new VueRouter({
  mode: "history",
  routes: [
    {path:'/', component: LandingPage},
    {path:'/dashboard', name: "dashboard", component: DashBoard, props: true},
    // {path: '/projects', component: ProjectBox, props: true}
  ] // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
