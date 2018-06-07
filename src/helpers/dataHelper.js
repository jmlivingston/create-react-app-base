import APP from 'config/appConstants'

const config = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

// TODO: Genericize this a bit. Make sure this model looks right
const request = async (url, config) => {
  try {
    const response = await fetch(url, config)
    const returnValue = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText || APP.ERROR.GENERIC
    }
    if (response.ok) {
      const data = await response.json()
      return {
        ...returnValue,
        data
      }
    } else {
      return returnValue
    }
  } catch (error) {
    return {
      status: {
        statusText: APP.ERROR.GENERIC
      }
    }
  }
}

const dataHelper = {
  get: async url => request(url, { ...config }),
  patch: async (url, value) =>
    request(url, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(value)
    }),
  post: async (url, value) =>
    request(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(value)
    }),
  put: async (url, value) =>
    request(url, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(value)
    }),
  remove: async url =>
    request(url, {
      ...config,
      method: 'DELETE'
    })
}

export default dataHelper
