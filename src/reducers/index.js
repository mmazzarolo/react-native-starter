import { combineReducers } from 'redux'
import auth from './authReducer'
import navigation from './navigationReducer'

export default combineReducers({
  auth,
  navigation
})
