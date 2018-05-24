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
import Item from '@/components/Item'

export default {
  name: 'details-page',
  components: {
    Item,
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
