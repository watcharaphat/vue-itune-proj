<template>
  <div>
    <div v-if="results">
      <div class="result-textbox">
        <h1>Search result: {{ results.length }}</h1>
      </div>
      <div class="columns">
        <searchresult v-for="index in 4" v-bind:result="results[index-1].artistName"></searchresult>
      </div>
      <div class="columns" v-if="results.length > 4">
        <searchresult v-for="index in 4" v-bind:result="results[index+3].artistName"></searchresult>
      </div>
      <div class="columns" v-if="results.length > 8">
        <searchresult v-for="index in 4" v-bind:result="results[index].artistName"></searchresult>
      </div>
      <div class="columns" v-if="results.length > 12"
        <searchresult v-for="index in 4" v-bind:result="results[index-1].artistName"></searchresult>
      </div>
      <div class="columns" v-if="results.length > 16">
        <searchresult v-for="index in 4" v-bind:result="results[index-1].artistName"></searchresult>
      </div>
      <div class="columns" v-if="results.length > 20">
        <searchresult v-for="index in 4" v-bind:result="results[index-1].artistName"></searchresult>
      </div>
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
