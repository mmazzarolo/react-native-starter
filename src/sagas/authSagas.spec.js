import test from 'ava'
import { call, put } from 'redux-saga/effects'
import { actionTypes as authActionTypes } from '../reducers/authReducer'
import { actionTypes as navigationActionTypes } from '../reducers/navigationReducer'
import { autoLogin, signup, login, logout, resetPassword } from './authSagas'
import * as parseService from '../services/parseService'
import * as alertHandler from '../services/alertHandler'
import * as routes from '../config/routes'

test('autoLogin saga ends successfully', (t) => {
  const generator = autoLogin()

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.currentUser))

  const user = { username: 'test' }
  next = generator.next(user)
  t.deepEqual(next.value, put({ type: authActionTypes.LOGIN_SUCCESS, user }))

  next = generator.next()
  t.deepEqual(next.value, put({ type: navigationActionTypes.RESET, route: routes.mainScreen }))
})

test('autoLogin saga ends in error', (t) => {
  const generator = autoLogin()

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.currentUser))

  next = generator.next(null)
  t.deepEqual(next.value, put({ type: navigationActionTypes.RESET, route: routes.authScreen }))
})

test('signup saga ends successfully', (t) => {
  const email = 'testEmail'
  const password = 'testPassword'
  const action = { email, password }
  const generator = signup(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.signup, email, password))

  const user = { username: 'test' }
  next = generator.next(user)
  t.deepEqual(next.value, put({ type: authActionTypes.SIGNUP_SUCCESS, user }))

  next = generator.next()
  t.deepEqual(next.value, put({ type: authActionTypes.LOGIN_SUCCESS, user }))

  next = generator.next()
  t.deepEqual(next.value, put({ type: navigationActionTypes.RESET, route: routes.mainScreen }))
})

test('signup saga ends in error', (t) => {
  const email = 'testEmail'
  const password = 'testPassword'
  const action = { email, password }
  const generator = signup(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.signup, email, password))

  const error = 'Generic error'
  next = generator.throw(error)
  t.deepEqual(next.value, put({ type: authActionTypes.SIGNUP_FAILURE, error }))

  next = generator.next()
  t.deepEqual(next.value, call(alertHandler.showErrorAlert, error))
})

test('login saga ends successfully', (t) => {
  const email = 'testEmail'
  const password = 'testPassword'
  const action = { email, password }
  const generator = login(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.login, email, password))

  const user = { username: 'test' }

  next = generator.next(user)
  t.deepEqual(next.value, put({ type: authActionTypes.LOGIN_SUCCESS, user }))

  next = generator.next()
  t.deepEqual(next.value, put({ type: navigationActionTypes.RESET, route: routes.mainScreen }))
})

test('login saga ends in error', (t) => {
  const email = 'testEmail'
  const password = 'testPassword'
  const action = { email, password }
  const generator = login(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.login, email, password))

  const error = 'Generic error'
  next = generator.throw(error)
  t.deepEqual(next.value, put({ type: authActionTypes.LOGIN_FAILURE, error }))

  next = generator.next()
  t.deepEqual(next.value, call(alertHandler.showErrorAlert, error))
})

test('logout saga ends successfully', (t) => {
  const generator = logout()

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.logout))

  next = generator.next()
  t.deepEqual(next.value, put({ type: navigationActionTypes.RESET, route: routes.authScreen }))
})

test('resetPassword saga ends successfully', (t) => {
  const email = 'testEmail'
  const action = { email }
  const generator = resetPassword(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.resetPassword, email))

  next = generator.next()
  t.deepEqual(next.value, put({ type: authActionTypes.PASSWORD_RESET_SUCCESS }))

  next = generator.next()
  t.deepEqual(next.value, call(alertHandler.showResetPasswordSuccessAlert))
})

test('resetPassword saga ends in error', (t) => {
  const email = 'testEmail'
  const action = { email }
  const generator = resetPassword(action)

  let next = generator.next()
  t.deepEqual(next.value, call(parseService.resetPassword, email))

  const error = 'Generic error'
  next = generator.throw(error)
  t.deepEqual(next.value, put({ type: authActionTypes.PASSWORD_RESET_FAILURE, error }))

  next = generator.next()
  t.deepEqual(next.value, call(alertHandler.showErrorAlert, error))
})
