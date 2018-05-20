//import { fetchDispatch } from './fetchUtils'
import axios from 'axios'
const route = 'users'
const routeById = 'userById'
const routeRemove = 'user/delete'
const url = 'http://localhost:3000/'
const apiProps = {
  url: '',
  params: {},
  types: {
    request: '',
    receive: ''
  }
}

function shouldFetchData ({ user }) {
  return !user.users || !user.isFetching
}

function fetchDispatch (opts) {
  return dispatch => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
    }
    dispatch({ type: opts.types.request }, config)
    return axios
      .get(opts.url, {
        params: opts.params
      })
      .then(response => {
        // Dispatch the recevied action with type and data
        const obj = opts.onReceived ? opts.onReceived(response) : { response }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      })
      .catch(error => dispatch({ type: 'RESET_ERROR_MESSAGE' }))
  }
}

function fetchUsers () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url + route
      apiProps.types.request = 'REQUEST_ALL_USERS'
      apiProps.types.receive = 'RECEIVE_ALL_USERS'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function fetchUsersById (id) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url + routeById
      apiProps.params = {id: id}
      apiProps.types.request = 'REQUEST_USER_BY_ID'
      apiProps.types.receive = 'RECEIVE_USER_BY_ID'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function removeUsersById (id) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url + routeRemove
      apiProps.params = {id: id}
      apiProps.types.request = 'REQUEST_USER_REMOVE_BY_ID'
      apiProps.types.receive = 'RECEIVE_USER_REMOVE_BY_ID'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

export default { fetchUsers, fetchUsersById, removeUsersById }
