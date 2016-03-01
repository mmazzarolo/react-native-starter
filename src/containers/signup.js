/**
 * @providesModule SignupModal
 */
import React, { PropTypes, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { reduxForm } from 'redux-form'
import ModalBox from 'react-native-modalbox'

import Button from 'Button'
import SignupForm from 'SignupForm'
import KeyboardSpacer from 'KeyboardSpacer'
import * as colors from 'ColorsConfig'


import * as signupActions from 'ReactNativeApp/src/redux/modules/auth'

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    isLoading: state.auth.isLoading,
  }
}

@connect(mapStateToProps, signupActions)
export default class SignupModal extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    signup: PropTypes.func.isRequired,
  }

  _handleButtonPress = form => this.props.signup(form.email, form.password)

  render() {
    return (
      <ModalBox
        animationDuration={200}
        swipeThreshold={100}
        style={styles.modal}
        position='bottom'
        isOpen={true}
        onClosed={Actions.dismiss}
      >
        <SignupForm onSubmit={this._handleButtonPress} />
        <KeyboardSpacer />
      </ModalBox>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 200,
    padding: 8,
  },
  button: {
    margin: 20,
  },
  textInput: {
    marginTop: 10,
    height: 40,
  }
})
