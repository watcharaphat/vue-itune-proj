<template>
  <div>
    <div v-if="results">
      <div class="columns">
        <div class="column is-full">
          <div class="result-textbox">
            <div class="found-textbox">Found: {{ results.length }} Results</div>
          </div>
        </div>
      </div>
      <searchresult v-for="result in results" :key="result.trackId" v-bind:result="result"></searchresult>
    </div>
  </div>
</template>

<script>
  import searchresult from './SearchResult'

  export default {
    props: ['results'],
    components: {
      searchresult
    }
  }
</script>

<style>
  .result-textbox {
    margin-bottom: 30px;
  }
  .found-textbox {
    font-size: 20px;
    margin-top: 15px;
  }
</style>
