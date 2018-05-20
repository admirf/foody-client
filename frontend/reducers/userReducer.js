function handleUserActions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_USERS':
      return {
        isFetching: true,
        users: []
      }
    case 'RECEIVE_ALL_USERS':
      const userDataAll = action.response.data
      return {
        isFetching: false,
        users: userDataAll
      }
    case 'REQUEST_USER_BY_ID':
        return {
          isFetching: true,
          userDetails: {}
      }
    case 'RECEIVE_USER_BY_ID':
        const userDetails = action.response.data
        return {
          isFetching: false,
          userDetails: userDetails
      }
    case 'REQUEST_USER_REMOVE_BY_ID':
          return {
            isFetching: true,
            userRemove: {}
      }
    case 'RECEIVE_USER_REMOVE_BY_ID':
          const userRemove = action.response.data
          return {
            isFetching: false,
            userRemove: userRemove
      }
    default:
      return state
  }
}

function userReducer (state = {}, action) {
  return Object.assign({}, state, handleUserActions(state, action))
}

export default userReducer
