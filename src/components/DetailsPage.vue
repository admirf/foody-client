<template>
  <div>
    Details Page
    <input type="number" v-model="userId"/>
    <div v-if="userId">
      <User :userId=userId />
    </div>
  </div>
</template>

<script>
import User from '@/components/User'

export default {
  name: 'details-page',
  components: {
    User
  },
  data () {
    return {
      userId: null
    }
  }
}
</script>

<style scoped>

</style>
