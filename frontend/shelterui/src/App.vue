<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'
import DashBoard from './components/DashBoard'

export default {
  name: 'app',
  components: {
    LandingPage,
    DashBoard,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  color: #2c3e50;
  background-color: #3a3986;
  height: 100%;
  width: 100%;
}
</style>
