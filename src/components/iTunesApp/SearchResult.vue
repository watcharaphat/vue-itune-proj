<template>
  <div class="columns">
    <a class="column card is-8" :href="result.previewUrl">
        <img class="card-img" :src="result.artworkUrl100" alt="Image"/>
        <div class="result-textbox">
          <p class="title">
            Track: {{ result.trackName }}
          </p>
          <div class="sub-text">
            Alubum: {{ result.collectionName }}
          </div>
          <div class="sub-text">
            Artist: {{ result.artistName }}
          </div>
        </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['result']
  }
</script>

<style scoped>
  .card {
    margin-bottom: 40px;
    margin-left: 11px;
  }
  .card-img {
    width: 20%;
    float: left;
  }
  .result-textbox {
    padding-left: 24%;
  }
  .title {
    font-size: 18px;
    font-weight: 400;
    padding: 0 0 0 0;
    margin: 7px 0 15px 0;
  }
  .sub-text {
    margin: 7px 0 0 0;
    font-size: 14px;
  }
</style>
