import { call, put } from 'redux-saga/effects'
import * as parseService from '../services/parseService'
import * as alertHandler from '../services/alertHandler'
import { actionTypes as authActionTypes } from '../reducers/authReducer'
import { actionTypes as navigationActionTypes } from '../reducers/navigationReducer'
import * as routes from '../config/routes'

export function* autoLogin (action) {
  const user = yield call(parseService.currentUser)
  if (user) {
    yield put({ type: authActionTypes.LOGIN_SUCCESS, user })
    yield put({ type: navigationActionTypes.RESET, route: routes.mainScreen })
  } else {
    yield put({ type: navigationActionTypes.RESET, route: routes.authScreen })
  }
}

export function* signup (action) {
  const { email, password } = action
  try {
    const user = yield call(parseService.signup, email, password)
    yield put({ type: authActionTypes.SIGNUP_SUCCESS, user })
    yield put({ type: authActionTypes.LOGIN_SUCCESS, user })
    yield put({ type: navigationActionTypes.RESET, route: routes.mainScreen })
  } catch (err) {
    const error = err.message || err
    yield put({ type: authActionTypes.SIGNUP_FAILURE, error })
    yield call(alertHandler.showErrorAlert, error)
  }
}

export function* login (action) {
  const { email, password } = action
  try {
    const user = yield call(parseService.login, email, password)
    yield put({ type: authActionTypes.LOGIN_SUCCESS, user })
    yield put({ type: navigationActionTypes.RESET, route: routes.mainScreen })
  } catch (err) {
    const error = err.message || err
    yield put({ type: authActionTypes.LOGIN_FAILURE, error })
    yield call(alertHandler.showErrorAlert, error)
  }
}

export function* resetPassword (action) {
  const { email } = action
  try {
    yield call(parseService.resetPassword, email)
    yield put({ type: authActionTypes.PASSWORD_RESET_SUCCESS })
    yield call(alertHandler.showResetPasswordSuccessAlert)
  } catch (err) {
    const error = err.message || err
    yield put({ type: authActionTypes.PASSWORD_RESET_FAILURE, error })
    yield call(alertHandler.showErrorAlert, error)
  }
}

export function* logout (action) {
  yield call(parseService.logout)
  yield put({ type: navigationActionTypes.RESET, route: routes.authScreen })
}
