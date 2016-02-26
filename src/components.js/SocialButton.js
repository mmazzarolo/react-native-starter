/**
 * @providesModule SocialButton
 */
import React, { PropTypes, StyleSheet, Text, View, } from 'react-native'
import TouchFeedback from 'TouchFeedback'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as colors from 'ColorsConfig'

export default ({ type, onPress, style }) => {
  const backgroundColor = type === 'facebook' ? colors.FACEBOOK : colors.GOOGLE
  const text = type === 'facebook' ? 'Login with Facebook' : 'Login with Google'
  return (
    <TouchFeedback onPress={onPress} style={[styles.container, style, { backgroundColor }]}>
      <Icon name={type} size={24} color='white' style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
      <View style={{ width: 24 }}/>
    </TouchFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.FACEBOOK,
    borderColor: colors.TRANSPARENT_DARK,
    borderRadius: 2,
    borderWidth: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
})
