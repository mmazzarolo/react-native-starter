import { Record } from 'immutable'

export const LOGOUT = 'global/LOGOUT'
export const RESET_STORE = 'global/RESET_STORE'

import { SESSION_TOKEN_SUCCESS } from './auth'
import { SIGNUP_SUCCESS } from './signup'

const InitialState = Record({
  user: null,
})

const initialState = new InitialState

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
    case RESET_STORE:
      return new InitialState

    case SESSION_TOKEN_SUCCESS:
    case SIGNUP_SUCCESS:
      return state
        .set('user', action.payload)

    default:
      return state
  }
}

export const logout = () => {
  return { type: LOGOUT }
}
