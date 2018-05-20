import userActions from './userActions'
import loginActions from './loginActions'
function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions
}
