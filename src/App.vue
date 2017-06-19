<template>
  <div id="app">
    <navibar></navibar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navibar from './components/NavBar/NavBar'
  import 'animate.css'
  
  export default {
    name: 'app',
    components: {
      navibar
    }
  }
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
