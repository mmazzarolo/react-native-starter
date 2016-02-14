import React, { Navigator, Platform } from 'react-native'
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux'
import { connect } from 'react-redux/native'
import AuthScreen from 'AuthScreen'

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

      </Router>
    )
  }
}
