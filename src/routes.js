import React, { Navigator } from 'react-native'
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux'
import { connect } from 'react-redux'
import AuthScreen from 'AuthScreen'
import SignupModal from 'SignupModal'
import LoginModal from 'LoginModal'

const Router = connect()(ReactNativeRouter.Router)

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Schema
          name='auth'
          sceneConfig={Navigator.SceneConfigs.FadeAndroid}
          hideNavBar={true}
          type='replace'
        />

        <Route schema='auth' component={AuthScreen} name='auth' initial={true} />
        <Route schema='auth' component={SignupModal} name='signup' type='modal' />
        <Route schema='auth' component={LoginModal} name='login' type='modal' />

      </Router>
    )
  }
}
