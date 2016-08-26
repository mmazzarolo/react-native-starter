export const actionTypes = {
  AUTO_LOGIN: 'AUTH/AUTH_AUTO_LOGIN',
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE',
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  PASSWORD_RESET_REQUEST: 'AUTH/PASSWORD_RESET_REQUEST',
  PASSWORD_RESET_SUCCESS: 'AUTH/PASSWORD_RESET_SUCCESS',
  PASSWORD_RESET_FAILURE: 'AUTH/PASSWORD_RESET_FAILURE',
  LOGOUT: 'AUTH/LOGOUT'
}

export const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.PASSWORD_RESET_REQUEST:
      return { ...state, isLoading: true }
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.user }
    case actionTypes.PASSWORD_RESET_SUCCESS:
      return { ...state, isLoading: false }
    case actionTypes.SIGNUP_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.PASSWORD_RESET_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    case actionTypes.LOGOUT:
      return { ...state, user: null }
    default:
      return state
  }
}

export const actionCreators = {
  autoLogin: () => ({ type: actionTypes.AUTO_LOGIN }),
  signup: (email, password) => ({ type: actionTypes.SIGNUP_REQUEST, email, password }),
  login: (email, password) => ({ type: actionTypes.LOGIN_REQUEST, email, password }),
  resetPassword: (email) => ({ type: actionTypes.PASSWORD_RESET_REQUEST, email }),
  logout: () => ({ type: actionTypes.LOGOUT })
}
