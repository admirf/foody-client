<template>
  <div>
    <br><b-button @click="addItem" variant="outline-warning">Add item</b-button><br><br>
    <div v-if="added">
      <b-alert variant="success" dismissible fade show>Success Alert</b-alert>
    </div>
    <b-table striped bordered :items="items"></b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Item',
  data () {
    return {
      items: [],
      added: false
    }
  },
  beforeMount: function () {
    this.fetchItems()
    // this.items.push({name: 'Hamburger', description: 'With Sallad', price: '2.5 KM'})
  },
  methods: {
    fetchItems () {
      let vm = this
      axios.get('http://localhost:8080/items')
        .then(function (response) {
          // console.log(response.data._embedded.item)
          for (let i in response.data._embedded.item) {
            vm.items.push({name: response.data._embedded.item[i].name,
              description: response.data._embedded.item[i].description,
              price: response.data._embedded.item[i].price + ' KM'})
          }
          // vm.items.push({name: response.data.name, description: response.data.description, price: response.data.price})
        })
        .catch(function (error) {
          if (error.response.status === 404) {
            this.user = null
            this.error = error.response.status
          }
        })
    },
    addItem () {
      let vm = this
      axios.post('http://localhost:8080/items', {
        name: 'Filete',
        description: 'Panera',
        price: 3.17
      })
        .then(function (response) {
          vm.added = true
          vm.items = []
          vm.fetchItems()
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
