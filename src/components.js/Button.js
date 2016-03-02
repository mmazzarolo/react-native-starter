/**
 * @providesModule Button
 */
import React, { StyleSheet, Text, View } from 'react-native'
import TouchFeedback from 'TouchFeedback'
import * as colors from 'ColorsConfig'

const Button = ({ onPress, style, children }) => (
  <TouchFeedback onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>
        {children}
      </Text>
  </TouchFeedback>
)

Button.propTypes = {
  onPress: React.PropTypes.func,
  style: View.propTypes.style,
  children: React.PropTypes.node,
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  text: {
    color: colors.MAIN,
    textAlign: 'center',
    fontWeight: '500',
  }
})

export default Button
