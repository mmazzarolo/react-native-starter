/**
 * @providesModule TouchFeedback
 */
import React, { View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21

const TouchFeedback = ({ children, style, rippleColor, ...props }) => {
  if (IS_RIPPLE_EFFECT_SUPPORTED && IS_ANDROID) {
    const background = TouchableNativeFeedback.Ripple(rippleColor, false)
    return (
      <TouchableNativeFeedback {...props} background={background} delayPressIn={0} delayPressOut={0}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    )
  }
  return <TouchableOpacity style={style} {...props}>{children}</TouchableOpacity>
}

TouchFeedback.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: View.propTypes.style,
  rippleColor: React.PropTypes.string,
}

export default TouchFeedback
