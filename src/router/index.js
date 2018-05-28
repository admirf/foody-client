import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Create from '@/components/Create'
import DetailsPage from '@/components/DetailsPage'
import Item from '@/components/Item'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/details',
      name: 'Details',
      component: DetailsPage
    },
    {
      path: '/dashboard',
      name: 'Items',
      component: Item
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
