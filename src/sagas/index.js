import { takeEvery } from 'redux-saga'
import { actionTypes as authActionTypes } from '../reducers/authReducer'

import { autoLogin, login, logout, signup, resetPassword } from './authSagas'

export default function* rootSaga () {
  yield [
    takeEvery(authActionTypes.AUTO_LOGIN, autoLogin),
    takeEvery(authActionTypes.SIGNUP_REQUEST, signup),
    takeEvery(authActionTypes.LOGIN_REQUEST, login),
    takeEvery(authActionTypes.PASSWORD_RESET_REQUEST, resetPassword),
    takeEvery(authActionTypes.LOGOUT, logout)
  ]
}
