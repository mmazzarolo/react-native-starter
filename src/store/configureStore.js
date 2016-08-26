import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import reducers from '../reducers/'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas/'

export default (initialState = {}, browserHistory) => {
  const middlewares = []

  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  // Create the logger
  if (__DEV__) {
    const LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED']
    const logger = createLogger({
      collapsed: true,
      predicate: (getState, action) => !LOGGING_BLACKLIST.includes(action.type)
    })
    middlewares.push(logger)
  }

  // Create and export the store
  const createStoreWithMiddleware = applyMiddleware(...middlewares)
  const finalCreateStore = createStoreWithMiddleware(createStore)
  const store = finalCreateStore(reducers, initialState)

  // Start the sagas
  sagaMiddleware.run(sagas)

  return store
}
