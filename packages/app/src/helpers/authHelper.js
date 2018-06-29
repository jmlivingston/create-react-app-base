import API from 'config/apiConstants'
import APP from 'config/appConstants'
import dataHelper from 'helpers/dataHelper'
import userValidationRules from './validation/rules/userValidationRules'
import { validate } from './validation/validatorHelper'

const setUser = async (user, isLogInOut = false) => {
  // TODO: Normalize response object. Update in dataHelper as well
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
      response = await dataHelper.put(`${API.USER.BASE}/${user.id}`, userProfile)
      if (response.response.ok) {
        localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
      }
    }
  }
  return response
}

const authHelper = {
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
      const logInResponse = await dataHelper.post(API.LOG_IN.BASE, emailPassword)
      let user = null
      if (logInResponse.response.ok) {
        const userResponse = await dataHelper.get(`${API.USER.BASE}/${logInResponse.data.user.id}`)
        user = {
          ...logInResponse.data.user,
          ...userResponse.data
        }
      }
      return user
    }
  }
}

export default authHelper
