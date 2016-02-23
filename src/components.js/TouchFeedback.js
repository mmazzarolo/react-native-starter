/**
 * @providesModule TouchFeedback
 */
import React, { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21

export default class TouchFeedback extends React.Component {
  render() {
    let background
    background = IS_RIPPLE_EFFECT_SUPPORTED
      ? TouchableNativeFeedback.Ripple(this.props.pressColor, false)
      : TouchableNativeFeedback.SelectableBackground()

    if (Platform.Version >= 21) {
      return (
        <TouchableNativeFeedback {...this.props} background={background}
          delayPressIn={0} delayPressOut={0}
        >
          {this.props.children}
        </TouchableNativeFeedback>
      )
    } else {
      return (
        <TouchableOpacity {...this.props}>
          {this.props.children}
        </TouchableOpacity>
      )
    }
  }
}

TouchFeedback.propTypes = {
  pressColor: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
}
