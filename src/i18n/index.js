import ReactNativeI18N from 'react-native-i18n'
ReactNativeI18N.fallbacks = true

import it from './it'
import en from './en'

ReactNativeI18N.translations = {
  en,
  it
}

export default ReactNativeI18N
