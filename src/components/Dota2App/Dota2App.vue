<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1>Show 10 most play heros from Account ID</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-8">
        <div class="field">
          <p class="control">
            <form v-on:submit.prevent="search">
              <input class="input" type="number" placeholder="9-digit account_id" v-model="input"></input>
              <button class="button is-primary button-search">Search</button>
            </form>
          </p>
        </div>
      </div>
    </div>
    <p class="example-input">ex. 143064711</p>

    <div class="columns result-area">
      <div class="column is-11">
        <topheroapp v-bind:heroes="data"></topheroapp>
      </div>
    </div>

  </div>
</template>

<script>
  import topheroapp from './TopHeroApp'

  const api = 'https://api.opendota.com/api/players/'
  const field = '/heroes'

  export default {
    data () {
      return {
        input: this.input,
        data: [],
        errors: []
      }
    },
    components: {
      topheroapp
    },
    methods: {
      search () {
        let url = api + this.input + field
        this.axios.get(url).then((response) => {
          this.data = response.data
          console.log(this.data[0])
        }).catch(error => {
          this.error.push(error)
          this.data = []
          alert('Can\'t fetch data.')
        })
      }
    }
  }
</script>

<style scoped>
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
  .example-input {
    color: grey;
    position: relative;
    font-size: 14px;
    top: -20px;
    left: 5px;
  }
</style>
