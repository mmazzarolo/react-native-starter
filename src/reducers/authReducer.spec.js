/* eslint-disable no-unused-expressions */
import test from 'ava'
import reducer, { actionTypes } from './authReducer'

test('handles SIGNUP_REQUEST', (t) => {
  const action = { type: actionTypes.SIGNUP_REQUEST }
  const state = reducer(undefined, action)
  t.true(state.isLoading)
})

test('handles SIGNUP_SUCCESS', (t) => {
  const user = { username: 'test' }
  const action = { type: actionTypes.SIGNUP_SUCCESS, user }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
  t.deepEqual(state.user, user)
})

test('handles SIGNUP_FAILURE', (t) => {
  const error = 'Generic error'
  const action = { type: actionTypes.SIGNUP_FAILURE, error }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
  t.deepEqual(state.error, error)
})

test('handles LOGIN_REQUEST', (t) => {
  const action = { type: actionTypes.LOGIN_REQUEST }
  const state = reducer(undefined, action)
  t.true(state.isLoading)
})

test('handles LOGIN_SUCCESS', (t) => {
  const user = { username: 'test' }
  const action = { type: actionTypes.LOGIN_SUCCESS, user }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
  t.deepEqual(state.user, user)
})

test('handles LOGIN_FAILURE', (t) => {
  const error = 'Generic error'
  const action = { type: actionTypes.LOGIN_FAILURE, error }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
  t.deepEqual(state.error, error)
})

test('handles PASSWORD_RESET_REQUEST', (t) => {
  const action = { type: actionTypes.PASSWORD_RESET_REQUEST }
  const state = reducer(undefined, action)
  t.true(state.isLoading)
})

test('handles PASSWORD_RESET_SUCCESS', (t) => {
  const user = { username: 'test' }
  const action = { type: actionTypes.PASSWORD_RESET_SUCCESS, user }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
})

test('handles PASSWORD_RESET_FAILURE', (t) => {
  const error = 'Generic error'
  const action = { type: actionTypes.PASSWORD_RESET_FAILURE, error }
  const state = reducer(undefined, action)
  t.false(state.isLoading)
  t.deepEqual(state.error, error)
})

test('handles LOGOUT', (t) => {
  const action = { type: actionTypes.LOGOUT }
  const state = reducer(undefined, action)
  t.is(state.user, null)
})
