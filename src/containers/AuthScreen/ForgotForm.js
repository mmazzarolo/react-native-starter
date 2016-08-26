import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'
import i18n from '../../i18n'
import Button from '../../components/Button'
import AuthTextInput from './AuthTextInput'
import * as metrics from '../../config/metrics'
import * as colors from '../../config/colors'
import * as formValidation from '../../services/formValidation'

export default class ForgotForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onForgotPress: PropTypes.func.isRequired,
    onLoginLinkPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired,
    style: PropTypes.any
  }

  state = {
    email: '',
    emailError: ''
  }

  _handleChangeEmail = (email) => {
    const emailError = formValidation.validateEmail(email)
      ? ''
      : i18n.t('AUTH_INVALID_EMAIL')
    this.setState({ email, emailError })
  }

  _handleForgotPress = () => {
    const { onForgotPress } = this.props
    const { email } = this.state
    onForgotPress(email)
  }

  render () {
    const { isLoading, onLoginLinkPress, onSignupLinkPress, style } = this.props
    const { email, emailError } = this.state
    const isValid = emailError === '' && email !== ''
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
          <Button
            onPress={this._handleForgotPress}
            isEnabled={isValid}
            isLoading={isLoading}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{i18n.t('AUTH_RESET_BUTTON')}</Text>
          </Button>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.signupText} onPress={onLoginLinkPress}>
            {i18n.t('AUTH_LOGIN_BUTTON')}
          </Text>
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
    justifyContent: 'space-between'
  },
  signupText: {
    color: colors.PRIMARY
  }
})
