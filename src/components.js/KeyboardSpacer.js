/**
 * @providesModule KeyboardSpacer
 */
import React, { Platform, Animated, View, DeviceEventEmitter } from 'react-native'

const KITKAT = 19

class KeyboardSpacer extends React.Component {
  static propTypes = {
    isScreenVisible: React.PropTypes.bool,
  }

  static defaultProps = {
    isScreenVisible: true,
  }

  constructor(props) {
    super(props)
    this.state = { keyboardHeightAnim: new Animated.Value(0) }
  }

  componentWillMount() {
    this._keyboardDidShowSubscription = DeviceEventEmitter.addListener('keyboardDidShow', e => {
      this._handleKeyboardShow(e)
    })
    this._keyboardDidHideSubscription = DeviceEventEmitter.addListener('keyboardDidHide', e => {
      this._handleKeyboardHide(e)
    })
  }

  componentWillUnmount() {
    this._keyboardDidShowSubscription.remove()
    this._keyboardDidHideSubscription.remove()
  }

  _handleKeyboardShow(e) {
    if (this.props.isScreenVisible) {
      Animated.timing(this.state.keyboardHeightAnim, {
        toValue: e.endCoordinates.height,
        duration: 250
      }).start()
    }
  }

  _handleKeyboardHide() {
    if (this.props.isScreenVisible) {
      Animated.timing(this.state.keyboardHeightAnim, {
        toValue: 0,
        duration: 250
      }).start()
    }
  }

  render() {
    return <Animated.View style={{ height: this.state.keyboardHeightAnim }} />
  }
}

// The app pans to show the Keyboard below Kitkat (We set it to resize from Kitkat to upwards)
export default Platform.OS === 'android' && Platform.Version < KITKAT ? View : KeyboardSpacer
