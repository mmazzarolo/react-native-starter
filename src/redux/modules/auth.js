import { Record } from 'immutable'

export const SESSION_TOKEN_REQUEST = 'auth/SESSION_TOKEN_REQUEST'
export const SESSION_TOKEN_FAILURE = 'auth/SESSION_TOKEN_FAILURE'
export const SESSION_TOKEN_SUCCESS = 'auth/SESSION_TOKEN_SUCCESS'

export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE'

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'

export const RESET_STORE = 'auth/RESET_STORE'

const InitialState = Record({
  error: null,
  isLoading: false,
  isInitialized: false,
})

const initialState = new InitialState

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TOKEN_REQUEST:
      return state
        .set('error', null)
        .set('isLoading', true)
        .set('isInitialized', false)

    case SESSION_TOKEN_FAILURE:
      return state
        .set('error', null)
        .set('isLoading', false)
        .set('isInitialized', true)

    case SESSION_TOKEN_SUCCESS:
      return state
        .set('error', action.payload)
        .set('isLoading', false)
        .set('isInitialized', true)

    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return state
        .set('error', null)
        .set('isLoading', true)

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return state
        .set('error', null)
        .set('isLoading', false)

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return state
        .set('error', action.payload)
        .set('isLoading', false)

    case RESET_STORE:
      return new InitialState

    default:
      return state
  }
}

export const checkSessionToken = () => async (dispatch) => {
  try {
    dispatch({ type: SESSION_TOKEN_REQUEST })
    const userToken = await getSessionToken()
    if (userToken) {
      dispatch({ type: SESSION_TOKEN_SUCCESS, payload: userToken })
    } else {
      dispatch({ type: SESSION_TOKEN_FAILURE, payload: null })
    }
  } catch (err) {
    dispatch({ type: SESSION_TOKEN_FAILURE, payload: err })
  }
}

const getSessionToken = () => {
  return new Promise(resolve => setTimeout(resolve, 500))
}

export const signup = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST })
    const user = await signupCall(username, password)
    dispatch({ type: SIGNUP_SUCCESS, payload: user })
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE, payload: err })
  }
}

const signupCall = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = { name: 'signedInUser' }
    setTimeout(() => resolve(user), 1000)
  })
}

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })
    const user = await loginCall(username, password)
    dispatch({ type: LOGIN_SUCCESS, payload: user })
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err })
  }
}

const loginCall = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = { name: 'loggedInUser' }
    setTimeout(() => resolve(user), 1000)
  })
}
