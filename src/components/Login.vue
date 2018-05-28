<template>
  <div id="create">
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                       type="password"
                       v-model="form.password"
                       required
                       placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <!--<b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>-->
      <b-button type="submit" variant="primary" v-b-modal.modal-center>Login</b-button>
      <!-- Modal Component -->
      <b-modal v-model="registered" id="modal-center" centered title="foody" ok-only>
        <p class="my-4">You successfully registered account!</p>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'create',
  data () {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        isAdmin: false
      },
      show: true,
      registered: false,
      token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pciIsImV4cCI6MTUyODAxNDU2Nn0.yPnsFXM0Y1z13S3vmnt-KlXZhnZS04D8jR7J_BUSN8bOoc3X9M-a5CTYSAGRF0oIr5FxBf3VKIxr_Z1I7v1kWw'
    }
  },
  methods: {
    onSubmit (evt) {
      let vm = this
      evt.preventDefault()
      /* axios.post('http://localhost:8080/accounts', {
        username: vm.form.username,
        email: vm.form.email,
        password: vm.form.password,
        isAdmin: false
      }, {
        headers: {
          Authorization: vm.token
        }
      })
        .then(function (response) {
          // vm.registered = true
          // vm.$router.push('/')
        })
        .catch(function (error) {
          alert(error)
        }) */
      vm.$router.push('/dashboard')
      // alert(JSON.stringify(vm.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.username = ''
      this.form.password = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style scoped>
  #create {
    margin-top: 30px;
    margin-left: 30%;
    margin-bottom: 30px;
    width: 500px;
  }

</style>
