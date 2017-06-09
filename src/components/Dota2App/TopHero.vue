<template>
  <div>
    <div>{{ hero }}</div>
    <br /><br /><br />
  </div>
</template>

<script>
  const api = 'https://api.opendota.com/api/heroes'

  export default {
    props: ['hero'],
    data () {
      return {
        heroes: [],
        errors: [],
        map: ([])
      }
    },
    created () {
      this.axios.get(api).then((response) => {
        this.heroes = response.data
      }).catch(error => {
        this.error.push(error)
        this.heroes = []
        alert('Can\'t fetch data.')
      })
    }
  }
</script>
