<template>
<div>
<aside class="menu">
  <p class="menu-label">
    APP PAGE
  </p>
  <ul class="menu-list">
    <li v-on:click="selectApp(1)"><a>iTunes</a></li>
    <li v-on:click="selectApp(2)"><a>Dota 2</a></li>
  </ul>
</aside>
</div>
</template>

<script>
  export default {
    data () {
      return {
        selectedApp: 1
      }
    },
    methods: {
      selectApp (page) {
        this.selectedApp = page
        this.$emit('updateview', this.selectedApp)
      }
    }
  }
</script>
