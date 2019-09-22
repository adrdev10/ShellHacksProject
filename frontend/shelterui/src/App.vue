<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'
import DashBoard from './components/DashBoard'
import SelectionBox from './components/DashBoard'

  // var firebaseConfig = {
  //   apiKey: "AIzaSyBBVkvi3AwU4dLPC8X2NqYnFILGYhtCxcw",
  //   authDomain: "sheltershell-fc7ec.firebaseapp.com",
  //   databaseURL: "https://sheltershell-fc7ec.firebaseio.com",
  //   projectId: "sheltershell-fc7ec",
  //   storageBucket: "",
  //   messagingSenderId: "89419486130",
  //   appId: "1:89419486130:web:0f5f9563a9dae75a018aab"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);


export default {
  name: 'app',
  components: {
    LandingPage,
	DashBoard
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
