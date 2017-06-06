<template>
  <div class="home">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          iTunes Search App
        </p>
        <p class="subtitle">
          A Vue.js Application to search artist, music, alubum and etc. from iTunes.
        </p>
      </div>
    </div>

    <div class="container margin-top-60">
      <div class="columns">
        <div class="column is-one-third">  
          <menuapp v-on:updateview="updateView"></menuapp>
        </div>
        <div class="column auto center">
          <itunesapp v-if="selectedApp===1"></itunesapp>
          <dota2app v-if="selectedApp===2"></dota2App>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuapp from './Menu/Menu'
import itunesapp from './iTunesApp/iTunesApp'
import dota2app from './Dota2App/Dota2App'

export default {
  name: 'home',
  components: {
    menuapp,
    itunesapp,
    dota2app
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectedApp: menuapp.data().selectedApp
    }
  },
  methods: {
    updateView (selectedApp) {
      this.selectedApp = selectedApp
      console.log('bobo')
      console.log(selectedApp)
    }
  }
}
</script>

<style>
  .hero-body {
    background-color: #00D1B2;
  }
  .hero-body p {
    color: #FFFFFF;
  }
  .margin-top-60 {
    margin-top: 60px;
  }
</style>
