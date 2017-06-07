<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1>Search from iTunes</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-10">
        <div class="field">
          <p class="control">
            <form v-on:submit.prevent="search">
              <input class="input" type="text" placeholder="artist, trackname, album and etc." v-model="input"></input>
              <button class="button is-primary button-search">Search</button>
            </form>
          </p>
        </div>
      </div>
    </div>

    <div class="columns result-area">
      <div class="column is-11">
        <searchresultapp v-bind:results="data.results"></searchresultapp>
      </div>
    </div>
  </div>
</template>

<script>
  import searchresultapp from './SearchResultApp'

  const api = 'https://itunes.apple.com/search?term='
  const limit = '&limit=25'

  export default {
    data () {
      return {
        input: this.input,
        searchString: '',
        data: [],
        errors: []
      }
    },
    components: {
      searchresultapp
    },
    methods: {
      search () {
        this.searchString = this.input.replace(/ /g, '+')
        let url = api + this.searchString + limit
        this.axios.get(url).then((response) => {
          this.data = response.data
        }).catch(error => {
          this.error.push(error)
          this.data = []
          alert('Can\'t fetch data.')
        })
      }
    }
  }
</script>

<style>
  h1 {
    font-size: 1.5em;
  }
  .button-search {
    float: right;
  }
  .input {
    width: 80%;
  }
  .result-area {
    margin-top: 20px;
  }
</style>
