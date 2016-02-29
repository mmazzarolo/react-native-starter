/**
 * @providesModule SignupModal
 */
import React, { PropTypes, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ModalBox from 'react-native-modalbox'

import Button from 'Button'
import KeyboardSpacer from 'KeyboardSpacer'
import * as colors from 'ColorsConfig'

import * as signupActions from 'ReactNativeApp/src/redux/modules/signup'

const mapStateToProps = state => {
  return {
    error: state.signup.error,
    isLoading: state.signup.isLoading,
    user: state.signup.user
  }
}

@connect(mapStateToProps, signupActions)
export default class SignupModal extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool,
    user: PropTypes.object,
    signup: PropTypes.func,
  }

  _handleButtonPress = () => {
    this.props.signup('', '')
  }

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
        <TextInput placeholder='Email' style={styles.textInput} selectionColor={colors.MAIN} />
        <TextInput placeholder='Password' style={styles.textInput} selectionColor={colors.MAIN} />
        <Button onPress={this._handleButtonPress} style={styles.button}>Sign Up</Button>
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
