<template>
  <div>
    User
    <div class="user-box" v-if="user">
      <span>{{user.username}}</span> <br>
      <span>{{user.email}}</span> <br>
      <span>{{user.password}}</span> <br>
    </div>
    <div v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['userId'],
  name: 'user',
  data () {
    return {
      user: null,
      error: null
    }
  },
  watch: {
    userId: function () {
      this.loadUser()
    }
  },
  methods: {
    loadUser () {
      axios.get(`http://localhost:8080/accounts/${this.userId}`)
        .then(function (response) {
          this.user = response.data
          this.loading = false
        }.bind(this))
        .catch(function (error) {
          if (error.response.status === 404) {
            this.user = null
            this.error = error.response.status
          }
        }.bind(this))
    }
  },
  created () {
    console.log(this.user)
    this.loadUser()
  }
}
</script>

<style scoped>
.user-box {
  background-color: whitesmoke;
  position: relative;
  margin-top: 100px;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
}
</style>
