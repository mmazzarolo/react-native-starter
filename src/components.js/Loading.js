/**
 * @providesModule Loading
 */
import React, { ActivityIndicatorIOS, Platform, ProgressBarAndroid } from 'react-native'
const IS_ANDROID = Platform.OS === 'android'

export default ({ ...props }) =>
  IS_ANDROID ? <ProgressBarAndroid {...props} /> : <ActivityIndicatorIOS {...props} />
