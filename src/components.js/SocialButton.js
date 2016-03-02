/**
 * @providesModule SocialButton
 */
import React, { StyleSheet, Text, View, } from 'react-native'
import TouchFeedback from 'TouchFeedback'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as colors from 'ColorsConfig'
import * as strings from 'StringsConfig'

const SocialButton = ({ type, onPress, style }) => {
  const backgroundColor = type === 'facebook' ? colors.FACEBOOK_BUTTON : colors.GOOGLE_BUTTON
  const text = type === 'facebook' ? strings.FACEBOOK_LOGIN : strings.GOOGLE_LOGIN
  return (
    <TouchFeedback onPress={onPress} style={[styles.container, style, { backgroundColor }]}>
      <Icon name={type} size={24} color='white' style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
      <View style={{ width: 24 }}/>
    </TouchFeedback>
  )
}

SocialButton.propTypes = {
  type: React.PropTypes.oneOf(['facebook', 'google']),
  onPress: React.PropTypes.func,
  style: View.propTypes.style,
}

SocialButton.defaultProps = {
  type: 'facebook',
  onPress: null,
}

const styles = StyleSheet.create({
  container: {
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

export default SocialButton
