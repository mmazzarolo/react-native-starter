import * as routes from './../config/routes'
import navigationStateUtils from 'NavigationStateUtils'

export const actionTypes = {
  PUSH: 'NAVIGATION/PUSH',
  POP: 'NAVIGATION/POP',
  RESET: 'NAVIGATION/RESET'
}

export const initialState = {
  key: 'root',
  index: 0,
  routes: [routes.splashScreen]
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.PUSH: {
      const { route } = action
      if (state.routes[state.index].key === (route && route.key)) return state
      return navigationStateUtils.push(state, route)
    }
    case actionTypes.POP: {
      if (state.index === 0 || state.routes.length === 1) return state
      return navigationStateUtils.pop(state)
    }
    case actionTypes.RESET: {
      const { route } = action
      return navigationStateUtils.reset(state, [route], 0)
    }
    default:
      return state
  }
}

export const actionCreators = {
  push: (route) => ({ type: actionTypes.PUSH, route }),
  pop: () => ({ type: actionTypes.POP }),
  reset: (route, index) => ({ type: actionTypes.PUSH, route, index }),
  goToSplashScreen: () => ({ type: actionTypes.RESET, route: routes.splashScreen }),
  goToAuthScreen: () => ({ type: actionTypes.RESET, route: routes.authenticationScreen }),
  goToMainScreen: () => ({ type: actionTypes.PUSH, route: routes.mainScreenScreen })
}

export const getCurrentRoute = ({ navigation }) => navigation.routes[navigation.index]
