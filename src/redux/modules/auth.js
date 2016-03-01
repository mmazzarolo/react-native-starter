import { Record } from 'immutable'

export const SESSION_TOKEN_REQUEST = 'auth/SESSION_TOKEN_REQUEST'
export const SESSION_TOKEN_FAILURE = 'auth/SESSION_TOKEN_FAILURE'
export const SESSION_TOKEN_SUCCESS = 'auth/SESSION_TOKEN_SUCCESS'

export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE'

export const RESET_STORE = 'auth/RESET_STORE'

const InitialState = Record({
  error: null,
  isLoading: false,
})

const initialState = new InitialState

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TOKEN_REQUEST:
    case SIGNUP_REQUEST:
      return state
        .set('error', null)
        .set('isLoading', true)

    case SESSION_TOKEN_SUCCESS:
    case SIGNUP_SUCCESS:
      return state
        .set('isLoading', false)

    case SESSION_TOKEN_FAILURE:
    case SIGNUP_FAILURE:
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
    const token = await getSessionToken()
    dispatch({ type: SESSION_TOKEN_SUCCESS, payload: token })
  } catch (err) {
    dispatch({ type: SESSION_TOKEN_SUCCESS, payload: err })
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
    const token = 'TEST_TOKEN'
    setTimeout(() => resolve({ username, password, token }), 1000)
  })
}
