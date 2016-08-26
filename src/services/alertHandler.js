import { Alert } from 'react-native'
import i18n from '../i18n/'

export const showErrorAlert = (error) => {
  Alert.alert(i18n.t('ERROR_TITLE'), error)
}

export const showResetPasswordSuccessAlert = () => {
  Alert.alert(
    i18n.t('AUTH_RESET_PASSWORD_SUCCESS_ALERT_TITLE'),
    i18n.t('AUTH_RESET_PASSWORD_SUCCESS_ALERT_CONTENT')
  )
}
