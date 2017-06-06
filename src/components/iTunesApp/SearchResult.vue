<template>
    <div class="column is-3">{{ result }}</div>
</template>

<script>
  export default {
    props: ['result'],
    data () {
      return {
        msg: 'Hello, result'
      }
    }
  }
</script>
