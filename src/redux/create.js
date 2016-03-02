import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

import globalReducer from 'ReactNativeApp/src/redux/modules/global'
import authReducer from 'ReactNativeApp/src/redux/modules/auth'

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  form: formReducer
})

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
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

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState)

export default configureStore
