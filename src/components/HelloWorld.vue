<template>
  <div>
    <h4>
      Please log in to your account or register if you don't have one.
    </h4>
    <b-col sm="8" offset="2">
      <b-button type="submit" variant="primary" href="#/login">Login</b-button>
      <b-button type="reset" variant="danger" href="#/create">Register</b-button>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchField: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #searchField {
    margin-top: 40px;
  }
</style>
