/**
 * @providesModule LoginModal
 */
import React, { PropTypes, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ModalBox from 'react-native-modalbox'

import LoginForm from 'LoginForm'
import KeyboardSpacer from 'KeyboardSpacer'

import * as authActions from 'ReactNativeApp/src/redux/modules/auth'

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading,
})

@connect(mapStateToProps, authActions)
export default class LoginModal extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
  }

  _handleButtonPress = form => this.props.login(form.email, form.password)

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
        <LoginForm onSubmit={this._handleButtonPress} />
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
