import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { View } from 'react-native-animatable'
import { Provider } from 'react-redux'
import NavigationRouter from './containers/NavigationRouter/NavigationRouter'
import configureStore from './store/configureStore'
import * as colors from './config/colors'

const store = configureStore()

export default class ReactNativeBoilerplate extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY_DARK} />
        <Provider store={store}>
          <NavigationRouter />
        </Provider>
      </View>
    )
  }
}
