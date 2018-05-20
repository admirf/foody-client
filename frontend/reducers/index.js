import { combineReducers } from 'redux'
import user from './userReducer'
import loginProps from './loginReducer'


// Updates error message to notify about the failed fetches.
function errorMessage (state = {}, action) {
  const { type, error } = action

  if (type === 'RESET_ERROR_MESSAGE') {
    return null
  } else if (error) {
    return action.errorMessage
  }

  return state
}

const rootReducer = combineReducers({
  user,
  errorMessage,
  loginProps,
  projectProps
})

export default rootReducer
