import { API, APP } from '../config'
import data from './data'
import userValidationRules from './validation/rules/userValidationRules'
import { validate } from './validation/validator'

const setUser = async (user, isLogInOut = false) => {
  // TODO: Normalize response object. Update in data as well
  let response = {}
  const isInValid = isLogInOut ? false : !validate(user, userValidationRules).form
  if (isInValid) {
    response = {
      ok: false,
      statusText: 'Fill in all required fields' // TODO: localize
    }
  } else {
    if (isLogInOut) {
      localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
    } else {
      // Remove properties not in user profile
      const { token, role, roleDescription, ...userProfile } = user
      response = await data.put(`${API.USER.BASE}/${user.id}`, userProfile)
      if (response.response.ok) {
        localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
      }
    }
  }
  return response
}

const auth = {
  user: {
    get: () => {
      let user = localStorage.getItem(APP.LOCAL_STORAGE_KEYS.AUTH)
      if (user) {
        user = JSON.parse(user)
      } else {
        user = APP.DEFAULT_PROFILE
        localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
      }
      return user
    },
    set: setUser,
    logIn: async emailPassword => {
      const logInResponse = await data.post(API.LOG_IN.BASE, emailPassword)
      let user = null
      if (logInResponse.response.ok) {
        const userResponse = await data.get(`${API.USER.BASE}/${logInResponse.data.user.id}`)
        user = {
          ...logInResponse.data.user,
          ...userResponse.data
        }
      }
      return user
    }
  }
}

export default auth
