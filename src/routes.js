import React, { Navigator, Platform } from 'react-native'
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux'
import { connect } from 'react-redux'
import AuthScreen from 'AuthScreen'
import SignupModal from 'SignupModal'

const Router = connect()(ReactNativeRouter.Router)

const hideNavBar = Platform.OS === 'android'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Schema
          name='boot'
          sceneConfig={Navigator.SceneConfigs.FadeAndroid}
          hideNavBar={true}
          type='replace'
        />
        <Schema
          name='main'
          sceneConfig={Navigator.SceneConfigs.FadeAndroid}
          hideNavBar={hideNavBar}
        />

        <Route schema='boot' component={AuthScreen} name='auth' initial={true} />
        <Route schema='boot' component={SignupModal} name='signup' type='modal' />

      </Router>
    )
  }
}
