<template>
  <div class="test">
    <h2>Test</h2>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      json: []
    }
  },

  mounted () {
    fetch('http://localhost:8081/test')
      .then((response) => response.json())
      .then(result => {
        this.json = result
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
