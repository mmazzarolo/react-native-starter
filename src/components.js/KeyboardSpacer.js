/**
 * @providesModule KeyboardSpacer
 */
import React, { Platform, Animated, View, DeviceEventEmitter } from 'react-native'

const KITKAT = 19

class KeyboardSpacer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { keyboardHeightAnim: new Animated.Value(0) }
  }

  componentWillMount() {
    this._keyboardWillShowSubscription = DeviceEventEmitter.addListener('keyboardDidShow', e => this._keyboardWillShow(e))
    this._keyboardWillHideSubscription = DeviceEventEmitter.addListener('keyboardDidHide', e => this._keyboardWillHide(e))
  }

  componentWillUnmount() {
    this._keyboardWillShowSubscription.remove()
    this._keyboardWillHideSubscription.remove()
  }

  _keyboardWillShow(e) {
    if (this.props.isScreenVisible) {
      console.log('_keyboardWillShow')
      Animated.timing(this.state.keyboardHeightAnim, {
        toValue: e.endCoordinates.height,
        duration: 250
      }).start()
    }
  }

  _keyboardWillHide() {
    if (this.props.isScreenVisible) {
      console.log('_keyboardWillHide')
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

KeyboardSpacer.propTypes = {
  isScreenVisible: React.PropTypes.bool,
}

KeyboardSpacer.defaultProps = {
  isScreenVisible: true,
}

// The app pans to show the Keyboard below Kitkat (We set it to resize from Kitkat to upwards)
export default Platform.OS === 'android' && Platform.Version < KITKAT ? View : KeyboardSpacer
