import React from 'react-native'
import { Provider } from 'react-redux'
import Routes from 'ReactNativeApp/src/routes'

import configureStore from 'ReactNativeApp/src/redux/create'

const store = configureStore()

export default class ReactNativeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes store={store} />
      </Provider>
    )
  }
}
