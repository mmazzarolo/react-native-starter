import React, { PropTypes } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import TouchableView from './TouchableView'
import { noop } from 'lodash'
import * as colors from '../config/colors'

const Button = ({ onPress, isEnabled, isLoading, children, style }) => {
  const backgroundColor = isEnabled && !isLoading ? colors.PRIMARY : colors.LIGHT_GREY
  const onButtonPress = isEnabled && !isLoading ? onPress : noop
  const buttonStyle = [styles.button, { backgroundColor }, style]
  const buttonContent = isLoading
    ? <ActivityIndicator style={{ height: 26 }} color={'grey'} />
    : children

  return (
    <TouchableView onPress={onButtonPress} style={buttonStyle}>
      {buttonContent}
    </TouchableView>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  isEnabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.any
}

Button.defaultProps = {
  onPress: () => noop,
  isEnabled: true,
  isLoading: false
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    borderWidth: 1,
    borderRadius: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
})

export default Button
