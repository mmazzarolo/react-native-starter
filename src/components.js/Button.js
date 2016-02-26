/**
 * @providesModule Button
 */
import React, { PropTypes, StyleSheet, Text, View, } from 'react-native'
import TouchFeedback from 'TouchFeedback'
import * as colors from 'ColorsConfig'

export default ({ onPress, buttonStyle, textStyle, style, children }) => (
  <TouchFeedback onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>
        {children}
      </Text>
  </TouchFeedback>
)

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
