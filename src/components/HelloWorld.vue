<template>
  <div>
    <h4>
      Foody is platform for easily finding your foods. You have an idea what could you eat, <br>but want it cheap and fast?
      We got you covered! Just type your food in field below and enjoy.
    </h4>
    <b-col sm="8" offset="2"><b-form-input id="searchField" v-model="searchField"
                  type="text"
                  placeholder="Search for food i.e. Hamburger">
    </b-form-input></b-col>
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
