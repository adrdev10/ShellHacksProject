import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import DashBoard from './components/DashBoard.vue'
import LandingPage from './components/LandingPage.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: "history",
  routes: [
    {path:'/', component: LandingPage},
    {path:'/dashboard', component: DashBoard},
    // {path: '/projects', component: ProjectBox, props: true}
  ] // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
