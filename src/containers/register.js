/**
 * @providesModule RegisterModal
 */
import React, { StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ModalBox from 'react-native-modalbox'

import Button from 'Button'
import KeyboardSpacer from 'KeyboardSpacer'
import * as colors from 'ColorsConfig'

import * as registerActions from 'ReactNativeApp/src/redux/modules/register'

const mapStateToProps = state => {
  return {}
}

class RegisterModal extends React.Component {
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
        <Button text='Register' buttonStyle={styles.button} />
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
    margin: 12,
  },
  textInput: {
    height: 40,
  }
})

export default connect(mapStateToProps, registerActions)(RegisterModal)
