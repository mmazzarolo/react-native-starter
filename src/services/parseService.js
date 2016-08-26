import Parse from 'parse/react-native'

export const initialize = (appId, serverURL) => {
  Parse.initialize(appId)
  Parse.serverURL = serverURL
}

export const currentUser = async () => {
  const user = await Parse.User.currentAsync()
  return user ? user.toJSON() : null
}

export const signup = async (email, password) => {
  const user = new Parse.User()
  user.set('username', email)
  user.set('email', email)
  user.set('password', password)
  const loggedUser = await user.signUp()
  return loggedUser.toJSON()
}

export const login = async (email, password) => {
  const user = await Parse.User.logIn(email, password)
  return user.toJSON()
}
export const resetPassword = async (email) => {
  await Parse.User.requestPasswordReset(email)
  return true
}

export const logout = async () => {
  Parse.User.logOut()
  return true
}
