<template>
  <div>
    <div id="add">
      <b-form inline>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="item.name" placeholder="Name" />
        <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="item.description" placeholder="Description" />
        <b-form-select v-model="item.category" :options="options" class="mb-2 mr-sm-2 mb-sm-0" />
        <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="item.price" placeholder="Price" />
        <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="item.imgUrl" placeholder="Link for picture" />
        <b-button variant="primary" @click="addItem">Save</b-button>
      </b-form>
    </div>
    <div v-if="added">
      <b-alert variant="success" dismissible fade show>Item successfully added</b-alert>
    </div>
    <b-table striped bordered fixed :items="items"></b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Item',
  data () {
    return {
      token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pciIsImV4cCI6MTUyODAxNDU2Nn0.yPnsFXM0Y1z13S3vmnt-KlXZhnZS04D8jR7J_BUSN8bOoc3X9M-a5CTYSAGRF0oIr5FxBf3VKIxr_Z1I7v1kWw',
      items: [],
      item: {
        name: '',
        description: '',
        price: '',
        category: '',
        imgUrl: '',
        location: {
          Type: 'Point',
          coordinates: [102, 4]
        }
      },
      added: false,
      options: [
        {value: 'Fast Food', text: 'Fast Food'},
        {value: 'Vegetables', text: 'Vegetables'},
        {value: 'Fruit', text: 'Fruit'},
        {value: 'Seafood', text: 'Seafood'}
      ]
    }
  },
  beforeMount: function () {
    this.fetchItems()
    // this.items.push({name: 'Hamburger', description: 'With Sallad', price: '2.5 KM'})
  },
  methods: {
    notification () {
      this.$notify({
        title: 'Success',
        message: 'You successfully added your item',
        type: 'success'
      })
    },
    fetchItems () {
      let vm = this
      axios.get('http://localhost:8080/items')
        .then(function (response) {
          // console.log(response.data._embedded.item)
          for (let i in response.data._embedded.item) {
            vm.items.push({name: response.data._embedded.item[i].name,
              description: response.data._embedded.item[i].description,
              price: response.data._embedded.item[i].price + ' KM',
              category: response.data._embedded.item[i].category})
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
        name: vm.item.name,
        description: vm.item.description,
        price: vm.item.price,
        imgUrl: vm.item.imgUrl,
        category: vm.item.category,
        location: {
          Type: vm.item.location.Type,
          coordinates: vm.item.location.coordinates
        }
      },
      {
        headers: {
          Authorization: vm.token
        }
      })
        .then(function (response) {
          vm.notification()
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
  #add {
    margin: 20px 5% 20px;
  }

</style>
