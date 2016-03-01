/**
 * @providesModule SignupForm
 */
import React, { PropTypes, Text, TextInput, View, StyleSheet } from 'react-native'
import { reduxForm } from 'redux-form'

import Button from 'Button'

const fields = ['email', 'password']

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if ((values.password.length) < 8) {
    errors.password = 'Your password must have at least 8 character'
  }
  return errors
}

@reduxForm({ form: 'signup', fields, validate })
export default class SignupForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { fields: { email, password }, handleSubmit, submitting } = this.props
    return (
      <View>
        <TextInput placeholder='Email' style={styles.textInput} {...email} />
        <TextInput placeholder='Password' style={styles.textInput} {...password} />
        <Button onPress={handleSubmit} style={styles.button}>
          Sign Up
        </Button>
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
