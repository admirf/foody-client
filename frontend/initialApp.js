import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './store/configureStore'

// Define the initial state properties here
let cachedUser = JSON.parse(localStorage.getItem('user'))
let loginPropsCached = {
  logged: false,
  error: '',
  isFetching: false,
  user: {}
}
 if(cachedUser) {
   loginPropsCached = {
    logged:cachedUser.logged,
    error: cachedUser.error,
    isFetching: false,
    user: cachedUser
   }
 }

const initialAppState = {
  user: {
    logged: false,
    isFetching: false,
    users:[],
    userDetails:{},
    userRemove:{}
  },

  projectProps: {
    isFetching: false,
    viewProject: {}
  },

  loginProps: loginPropsCached,
  errorMessage: null

}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
