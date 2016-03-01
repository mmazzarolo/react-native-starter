import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable'
import { reducer as form } from 'redux-form'

import global from './modules/global'
import auth from './modules/auth'

const rootReducer = combineReducers({
  global,
  auth,
  form
})

const stateTransformer = (state) => {
  let newState = {}
  for (var i of Object.keys(state)) {
    if (Immutable.Iterable.isIterable(state[i])) {
      newState[i] = state[i].toJS()
    } else {
      if (Object.keys(state[i]).length) {
        newState[i] = stateTransformer(state[i])
      } else {
        newState[i] = state[i]
      }
    }
  }
  return newState
}

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  // stateTransformer
})

let createStoreWithMiddleware
if (__DEV__) {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
}

const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore
