<template>
  <div>
    <div v-if="results">
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['results'],
    data () {
      return {
        msg: 'Hello from the other side'
      }
    }
  }
</script>
