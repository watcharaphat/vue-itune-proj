<template>
  <div>
    <div v-if="results">
      <div class="result-textbox">
        <h1>Found: {{ results.length }} Results</h1>
      </div>
      <searchresult v-for="result in results" :key="result.trackId" v-bind:result="result"></searchresult>
    </div>
  </div>
</template>

<script>
  import searchresult from './SearchResult'

  export default {
    props: ['results'],
    data () {
      return {
        msg: 'Hello, result'
      }
    },
    components: {
      searchresult
    }
  }
</script>

<style>
  .result-textbox {
    margin-bottom: 30px;
  }
</style>
