import React, { Component, PropTypes } from 'react'
import { Keyboard, LayoutAnimation, Platform, StyleSheet } from 'react-native'
import { Image, View } from 'react-native-animatable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../reducers/authReducer'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ForgotForm from './ForgotForm'
import * as metrics from '../../config/metrics'
import headerImg from '../../images/header.png'

const IS_ANDROID = Platform.OS === 'android'

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch)
})

export class AuthScreen extends Component {
  static propTypes = {
    user: PropTypes.object,
    isLoading: PropTypes.bool,
    login: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired
  }

  state = {
    visibleForm: 'LOGIN',
    containerHeight: metrics.DEVICE_HEIGHT,
    headerHeight: metrics.DEVICE_HEIGHT / 2
  }

  componentWillMount () {
    if (!IS_ANDROID) {
      Keyboard.addListener('keyboardWillShow', this._handleKeyboardShow)
      Keyboard.addListener('keyboardWillHide', this._handleKeyboardHide)
    }
  }

  componentDidMount () {
    this.refs.headerImg.rubberBand(1000)
    this.refs.form.fadeIn(1000)
  }

  componentWillUnmount () {
    if (!IS_ANDROID) {
      Keyboard.removeAllListeners('keyboardWillShow')
      Keyboard.removeAllListeners('keyboardWillHide')
    }
  }

  _handleKeyboardShow = (e) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const containerHeight = metrics.DEVICE_HEIGHT - e.endCoordinates.height
    const headerHeight = (metrics.DEVICE_HEIGHT / 2) - e.endCoordinates.height
    this.setState({ containerHeight, headerHeight })
  }

  _handleKeyboardHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const containerHeight = metrics.DEVICE_HEIGHT
    const headerHeight = metrics.DEVICE_HEIGHT / 2
    this.setState({ containerHeight, headerHeight })
  }

  _setVisibleForm = async (visibleForm) => {
    await this.refs.form.fadeOut(400)
    this.setState({ visibleForm })
    await this.refs.form.fadeIn(400)
  }

  _renderForm = () => {
    const { isLoading, signup, login, resetPassword } = this.props
    switch (this.state.visibleForm) {
      case 'SIGNUP':
        return (
          <SignupForm
            isLoading={isLoading}
            onSignupPress={signup}
            onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
          />
        )
      case 'LOGIN':
        return (
          <LoginForm
            isLoading={isLoading}
            onLoginPress={login}
            onSignupLinkPress={() => this._setVisibleForm('SIGNUP')}
            onForgotLinkPress={() => this._setVisibleForm('FORGOT')}
          />
        )
      case 'FORGOT':
        return (
          <ForgotForm
            isLoading={isLoading}
            onForgotPress={resetPassword}
            onSignupLinkPress={() => this._setVisibleForm('SIGNUP')}
            onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
          />
        )
      default: return null
    }
  }

  render () {
    const { containerHeight, headerHeight } = this.state

    return (
      <View>
        <Image
          ref={'headerImg'}
          source={headerImg}
          style={[styles.headerImg, { height: headerHeight }]}
          animation={'rubberBand'}
        />
        <View style={[styles.container, { height: containerHeight }]}>
          <View />
          <View style={styles.formContainer} ref={'form'}>
            {this._renderForm()}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerImg: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: metrics.DEVICE_WIDTH - 60,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
