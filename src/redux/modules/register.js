import { Record } from 'immutable'

export const SESSION_TOKEN_REQUEST = 'session/SESSION_TOKEN_REQUEST'
export const SESSION_TOKEN_FAILURE = 'session/SESSION_TOKEN_FAILURE'
export const SESSION_TOKEN_SUCCESS = 'session/SESSION_TOKEN_SUCCESS'
export const RESET_SESSION = 'session/RESET_SESSION'
export const RESET_STORE = 'RESET_STORE'

const InitialState = Record({
  error: null,
  isFetching: false,
  test: 'empty'
})

const initialState = new InitialState

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TOKEN_REQUEST:
      return state
        .set('error', null)
        .set('isFetching', true)

    case SESSION_TOKEN_SUCCESS:
      return state
        .set('error', null)
        .set('test', 'full')
        .set('isFetching', false)

    case SESSION_TOKEN_FAILURE:
      console.warn('SESSION_TOKEN_FAILURE')
      return state
        .set('isFetching', false)

    case RESET_SESSION:
    case RESET_STORE:
      return new InitialState

    default:
      return state
  }
}
export const checkSessionToken = () => async(dispatch) => {
  try {
    dispatch({ type: SESSION_TOKEN_REQUEST })
    const token = await getSessionToken()
    dispatch({ type: SESSION_TOKEN_SUCCESS, payload: token })
  } catch (err) {
    dispatch({ type: SESSION_TOKEN_SUCCESS, payload: err })
  }
}

async function getSessionToken() {
  return new Promise((resolve) => setTimeout(resolve, 500))
}
