import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'
import i18n from '../../i18n'
import Button from '../../components/Button'
import AuthTextInput from './AuthTextInput'
import * as metrics from '../../config/metrics'
import * as colors from '../../config/colors'
import * as formValidation from '../../services/formValidation'

export default class SignupForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onSignupPress: PropTypes.func.isRequired,
    onLoginLinkPress: PropTypes.func.isRequired,
    style: PropTypes.any
  }

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }

  _handleChangeEmail = (email) => {
    const emailError = formValidation.validateEmail(email)
      ? ''
      : i18n.t('AUTH_INVALID_EMAIL')
    this.setState({ email, emailError })
  }

  _handleChangePassword = (password) => {
    const passwordError = formValidation.validatePassword(password)
      ? ''
      : i18n.t('AUTH_INVALID_PASSWORD')
    this.setState({ password, passwordError })
  }

  _handleSignupPress = () => {
    const { onSignupPress } = this.props
    const { email, password } = this.state
    onSignupPress(email, password)
  }

  render () {
    const { isLoading, onLoginLinkPress, style } = this.props
    const { email, emailError, password, passwordError } = this.state
    const isValid = emailError === '' && passwordError === '' && email !== '' && password !== ''
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
            iconName={'md-lock'}
            errorText={passwordError}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            value={password}
            onChangeText={this._handleChangePassword}
            secureTextEntry={true}
          />
          <Button
            onPress={this._handleSignupPress}
            isEnabled={isValid}
            isLoading={isLoading}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{i18n.t('AUTH_SIGNUP_BUTTON')}</Text>
          </Button>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text>{i18n.t('AUTH_ALREADY_REGISTERED')}{' '}</Text>
          <Text style={styles.signupText} onPress={onLoginLinkPress}>
            {i18n.t('AUTH_LOGIN_BUTTON')}
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
