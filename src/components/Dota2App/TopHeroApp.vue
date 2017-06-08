<template>
  <div>
    <div v-if="heroes[0]">
      <div v-on:click="print">print the results[0]</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['heroes'],
    data () {
      return {
        msg: 'Hello from the other side'
      }
    },
    methods: {
      print () {
        alert(this.heroes[0])
      }
    }
  }
</script>
