/**
 * @providesModule LoginForm
 */
import React, { TextInput, View, StyleSheet } from 'react-native'
import { reduxForm } from 'redux-form'

import * as strings from 'StringsConfig'

import AuthButton from 'AuthButton'

const fields = ['email', 'password']

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

@reduxForm({ form: 'Login', fields, validate })
export default class LoginForm extends React.Component {
  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired
  }

  render() {
    const { fields: { email, password }, handleSubmit, submitting } = this.props
    const isValid = !email.error && !password.error
    return (
      <View>
        <TextInput placeholder='Email' style={styles.textInput} {...email} />
        <TextInput placeholder='Password' style={styles.textInput} {...password} />
        <AuthButton
          onPress={handleSubmit}
          style={styles.button}
          isEnabled={isValid}
          isLoading={submitting}
          text={strings.AUTH_LOGIN_BUTTON}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    height: 40,
  },
  button: {
    margin: 20,
  },
})
