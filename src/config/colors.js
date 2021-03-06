import { Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'

export const TEXT_NORMAL = IS_ANDROID ? '#343434' : '#000000'
export const TEXT_LIGHT = 'grey'
export const TEXT_PARAGRAPH = '#7F91A7'
export const FORM_TEXTINPUT_TEXT = IS_ANDROID ? '#343434' : '#000000'
export const FORM_TEXTINPUT_BORDER = '#cccccc'
export const FORM_TEXTINPUT_BACKGROUND = 'white'
export const FORM_TEXTINPUT_ERROR = '#DC143C'
export const PRIMARY = '#048db4'
export const PRIMARY_DARK = '#006d92'
export const PRIMARY_DARKER = '#006d92'
export const PRIMARY_LIGHTER = '#cee1eb'
export const PRIMARY_LIGHTEST = '#EBF3F7'
export const LIGHT_GREY = '#EEEEEE'
export const ALMOST_BLACK = '#33383D'
