import React, { Component, PropTypes } from 'react'
import { BackAndroid, NavigationExperimental, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import i18n from '../../i18n'
import { actionCreators as navigationActionCreators, getCurrentRoute } from '../../reducers/navigationReducer'
import { actionCreators as authActionCreators } from '../../reducers/authReducer'
import NavBar from './NavBar'
import SplashScreen from '../SplashScreen/SplashScreen'
import AuthScreen from '../AuthScreen/AuthScreen'
import MainScreen from '../MainScreen/MainScreen'

const { CardStack } = NavigationExperimental

const mapStateToProps = (state, ownProps) => ({
  navigationState: state.navigation,
  currentRoute: getCurrentRoute(state)
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ...navigationActionCreators, ...authActionCreators }, dispatch),
  dispatch
})

export class NavigationRouter extends Component {
  static propTypes = {
    navigationState: PropTypes.object,
    currentRoute: PropTypes.object,
    autoLogin: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static defaultProps = {
    navigationState: {},
    currentRoute: {}
  }

  componentDidMount () {
    const { pop, autoLogin } = this.props
    BackAndroid.addEventListener('hardwareBackPress', pop)
    autoLogin()
  }

  _renderScene = (props) => {
    const { currentRoute } = this.props
    switch (currentRoute.key) {
      case 'splashScreen': return <SplashScreen />
      case 'authScreen': return <AuthScreen />
      case 'mainScreen': return <MainScreen />
      default: return null
    }
  }

  _renderToolbar = (navigatorProps) => {
    const { currentRoute } = this.props
    if (currentRoute.hideNavBar) return null
    const onLeftPress = this.props.pop
    return (
      <NavBar
        title={i18n.t(currentRoute.title)}
        onLeftPress={onLeftPress}
        {...navigatorProps}
      />
    )
  }

  render () {
    const { navigationState, currentRoute, dispatch } = this.props
    console.log(`Navigation currentRoute: ${currentRoute.key}`)
    return (
      <CardStack
        navigationState={navigationState}
        onNavigate={dispatch}
        renderOverlay={this._renderToolbar}
        renderScene={this._renderScene}
        style={styles.container}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Metrics.NAVBAR_HEIGHT
  }
})
