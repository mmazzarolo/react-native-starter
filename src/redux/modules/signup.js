import { Record } from 'immutable'

export const SIGNUP_REQUEST = 'SIGNUP/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP/SIGNUP_FAILURE'

const InitialState = Record({
  error: null,
  isLoading: false,
  user: null,
})

const initialState = new InitialState

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return state
        .set('error', null)
        .set('isLoading', true)

    case SIGNUP_SUCCESS:
      return state
        .set('user', action.payload)
        .set('isLoading', false)

    case SIGNUP_FAILURE:
      console.warn('SIGNUP_FAILURE')
      return state
        .set('error', action.payload)
        .set('isLoading', false)

    default:
      return state
  }
}

export const signup = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST })
    const user = await fakeSignupCall(username, password)
    dispatch({ type: SIGNUP_SUCCESS, payload: user })
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE, payload: err })
  }
}

const fakeSignupCall = (username, password) => {
  return new Promise((resolve, reject) => {
    const token = 'TEST_TOKEN'
    setTimeout(() => resolve({ username, password, token }), 5000)
  })
}
