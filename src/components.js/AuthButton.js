/**
 * @providesModule AuthButton
 */
import React, { StyleSheet, Text, } from 'react-native'
import TouchFeedback from 'TouchFeedback'
import Loading from 'Loading'
import * as colors from 'ColorsConfig'

const AuthButton = ({ onPress, isLoading, isEnabled, text, style }) => {
  const buttonStyle = [style, styles.button, isEnabled ? styles.buttonEnabled : styles.buttonDisabled]
  const textStyle = [styles.text, isEnabled ? styles.textEnabled : styles.textDisabled]
  const contentLoading = <Loading style={{ height: 19 }} color={colors.MAIN} />
  const contentText = <Text style={textStyle}>{text}</Text>

  return (
    <TouchFeedback onPress={isEnabled && !isLoading ? onPress : null} style={buttonStyle}>
      {isLoading ? contentLoading : contentText}
    </TouchFeedback>
  )
}

AuthButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool,
  isEnabled: React.PropTypes.bool,
}

AuthButton.defaultProps = {
  isLoading: false,
  isEnabled: true,
  text: ''
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonEnabled: {
    borderColor: colors.MAIN,
  },
  buttonDisabled: {
    borderColor: colors.NOT_ENABLED,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
  textEnabled: {
    color: colors.MAIN,
  },
  textDisabled: {
    color: colors.NOT_ENABLED,
  },
})

export default AuthButton
