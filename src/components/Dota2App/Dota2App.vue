<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1>Show 10 most play heros from account_id.</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <p class="control">
            <form v-on:submit.prevent="search">
              <input class="input" type="text" placeholder="account_id" v-model="input"></input>
              <button class="button is-primary button-search">Search</button>
            </form>
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
</style>
