// TODO: This is a minimal Fetch API wrapper. Consider Axios, Apollo Client, or Relay
import APP from 'config/appConstants'
import authHelper from 'helpers/authHelper'

const MAX_REFRESH_TOKEN_COUNT = 3

const getConfig = async () => ({
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorizationToken: await authHelper.user.get().authorizationToken
  }
})

const getRequestReturnValue = async (response, params, config) => {
  // TODO: Does this make sense? Should we genericize?
  let data = null
  try {
    data = await response.json()
  } catch (error) {}
  return {
    response: {
      bodyUsed: response.bodyUsed,
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url
    },
    config,
    params,
    data,
    friendlyError: response.ok ? undefined : response.status === 403 ? APP.ERROR.ACCESS_DENIED : APP.ERROR.GENERIC
  }
}

const request = async (url, params, refreshTokenTries = 0) => {
  try {
    const config = await getConfig()
    const response = await fetch(url, { ...config, ...params })
    const returnValue = await getRequestReturnValue(response, params, config)
    if (returnValue.response.ok) {
      return returnValue
    } else {
      // Check for expired token and refresh and re-request
      // Another option is to redirect to Login page
      if (
        returnValue.data !== null
          ? returnValue.data.name === 'TokenExpiredError' && returnValue.data.authorizationToken !== undefined
          : false
      ) {
        if (refreshTokenTries >= MAX_REFRESH_TOKEN_COUNT) {
          throw new Error('Unable to refresh token. Try logging out and logging in again.')
        } else {
          let user = authHelper.user.get()
          await authHelper.user.set({ ...user, authorizationToken: returnValue.data.authorizationToken }, true)
          return request(url, params, refreshTokenTries++)
        }
      } else {
        return returnValue
      }
    }
  } catch (error) {
    return {
      error,
      friendlyError: APP.ERROR.GENERIC
    }
  }
}

const dataHelper = {
  get: async url => request(url),
  patch: async (url, value) =>
    request(url, {
      method: 'PATCH',
      body: JSON.stringify(value)
    }),
  post: async (url, value) =>
    request(url, {
      method: 'POST',
      body: JSON.stringify(value)
    }),
  put: async (url, value) =>
    request(url, {
      method: 'PUT',
      body: JSON.stringify(value)
    }),
  remove: async url =>
    request(url, {
      method: 'DELETE'
    })
}

export default dataHelper
