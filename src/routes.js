import React, { Navigator, Platform } from 'react-native'
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux'
import { connect } from 'react-redux'
import AuthScreen from 'AuthScreen'
import RegisterModal from 'RegisterModal'
// import LoginModal from 'LoginModal'

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
        <Route schema='boot' component={RegisterModal} name='register' type='modal' />
        {/*<Route schema='boot' component={LoginModal} name='login' type='modal' />*/}

      </Router>
    )
  }
}
