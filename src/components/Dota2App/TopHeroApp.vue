<template>
  <div>
    <div v-if="heroes[0]">
      <div class="columns">
        <div class="column">
          <h1>Your most played heroes</h1>
        </div>
      </div>

      <div class="columns is-multiline">
        <tophero v-for="index in 10" :key="index" v-bind:hero="heroes[index-1]"></tophero>
      </div>
    </div>
  </div>
</template>

<script>
  import tophero from './TopHero'
  
  export default {
    props: ['heroes'],
    components: {
      tophero
    }
  }
</script>
