import { Dimensions, Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')

export const ANDROID_STATUSBAR = 24
export const DEVICE_HEIGHT = IS_ANDROID ? height - 24 : height
export const DEVICE_WIDTH = width
export const NAVBAR_HEIGHT = IS_ANDROID ? 54 : 64
