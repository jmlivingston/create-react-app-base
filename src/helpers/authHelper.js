import API from 'config/apiConstants'
import APP from 'config/appConstants'
import dataHelper from 'helpers/dataHelper'

const setUser = async user => {
  localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
}

const authHelper = {
  user: {
    get: () => {
      let user = localStorage.getItem(APP.LOCAL_STORAGE_KEYS.AUTH)
      if (user) {
        return JSON.parse(user)
      } else {
        user = APP.DEFAULT_PROFILE
        setUser(user)
      }
      return user
    },
    set: setUser,
    logIn: async emailPassword => {
      const logInResponse = await dataHelper.post(API.LOG_IN.BASE, emailPassword)
      let user = null
      if (logInResponse.ok) {
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
