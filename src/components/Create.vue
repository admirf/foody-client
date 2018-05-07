<template>
  <div id="create">
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group id="exampleInputGroup2"
                    label="Username:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Password:"
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
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      var vm = this
      evt.preventDefault()
      axios.post('http://localhost:8080/accounts', {
        username: vm.form.username,
        email: vm.form.email,
        password: vm.form.password,
        isAdmin: false
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
