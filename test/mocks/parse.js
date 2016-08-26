import { spy } from 'sinon'

const ParseUser = {
  toJSON: spy(),
  set: spy(),
  get: spy()
}

export default {
  initialize: spy(),
  signUp: () => ParseUser,
  logIn: () => ParseUser,
  logOut: spy(),
  User: { Current: ParseUser }
}
