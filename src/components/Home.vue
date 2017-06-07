<template>
  <div class="home">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          {{ titles[selectedApp-1] }}
        </p>
        <p class="subtitle">
          {{ subTitles[selectedApp-1] }}
        </p>
      </div>
    </div>

    <div class="container margin-top-60">
      <div class="columns">
        <div class="column is-3">  
          <menuapp v-on:updateview="updateView"></menuapp>
        </div>
        <div class="column auto center">
          <keep-alive>
            <itunesapp v-if="selectedApp===1"></itunesapp>
          </keep-alive>
          <keep-alive>
            <dota2app v-if="selectedApp===2"></dota2App>
          </keep-alive>
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
      titles: ['iTunes Search App', 'Dota 2 API App'],
      subTitles: ['A Vue.js Application to search artist, music, alubum and etc. from iTunes.',
        'A Vue.js Applicatoon to search from Dota 2.'],
      selectedApp: menuapp.data().selectedApp
    }
  },
  methods: {
    updateView (selectedApp) {
      this.selectedApp = selectedApp
    }
  }
}
</script>

<style>
  * {
    font-family: 'Roboto', sans-serif;
  }
  .hero-body {
    background-color: #00D1B2;
  }
  .hero-body p {
    color: #FFFFFF;
  }
  .margin-top-60 {
    margin-top: 60px;
  }
  .subtitle {
    padding-top: 10px;
  }
</style>
