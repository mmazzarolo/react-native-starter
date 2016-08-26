import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'
import Button from '../../components/Button'
import AuthTextInput from './AuthTextInput'
import i18n from '../../i18n'
import * as metrics from '../../config/metrics'
import * as colors from '../../config/colors'
import * as formValidation from '../../services/formValidation'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired,
    onForgotLinkPress: PropTypes.func.isRequired,
    style: PropTypes.any
  }

  state = {
    email: '',
    emailError: '',
    password: ''
  }

  _handleChangeEmail = (email) => {
    const emailError = formValidation.validateEmail(email)
      ? ''
      : i18n.t('AUTH_INVALID_EMAIL')
    this.setState({ email, emailError })
  }

  _handleChangePassword = (password) => {
    this.setState({ password })
  }

  _handleLoginPress = () => {
    const { onLoginPress } = this.props
    const { email, password } = this.state
    onLoginPress(email, password)
  }

  render () {
    const { isLoading, onSignupLinkPress, onForgotLinkPress, style } = this.props
    const { email, emailError, password } = this.state
    const isValid = emailError === '' && email !== '' && password !== ''
    return (
      <View style={[styles.container, style]}>
        <View>
          <AuthTextInput
            ref={'email'}
            isPassword={false}
            iconName={'md-mail'}
            errorText={emailError}
            placeholder={'Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            value={email}
            onSubmitEditing={() => this.refs.password.focus()}
            onChangeText={this._handleChangeEmail}
          />
          <AuthTextInput
            ref={'password'}
            showForgotLink={true}
            onForgotPress={onForgotLinkPress}
            iconName={'md-lock'}
            errorText={''}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            value={password}
            onChangeText={this._handleChangePassword}
            secureTextEntry={true}
          />
          <Button
            onPress={this._handleLoginPress}
            isEnabled={isValid}
            isLoading={isLoading}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{i18n.t('AUTH_LOGIN_BUTTON')}</Text>
          </Button>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text>{i18n.t('AUTH_NO_ACCOUNT')}{' '}</Text>
          <Text style={styles.signupText} onPress={onSignupLinkPress}>
            {i18n.t('AUTH_SIGNUP_BUTTON')}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: metrics.DEVICE_HEIGHT / 2,
    justifyContent: 'space-between',
    padding: 28
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signupText: {
    color: colors.PRIMARY
  }
})
