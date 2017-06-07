<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1>Show 10 most play heros from Account ID</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
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

  </div>
</template>

<script>
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
    methods: {
      search () {
        this.searchString = this.input.replace(/ /g, '+')
        let url = api + this.input + field
        this.axios.get(url).then((response) => {
          this.data = response.data
          console.log(this.data)
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
</style>
