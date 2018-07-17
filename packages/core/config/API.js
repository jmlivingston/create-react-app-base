const localUrl = 'http://localhost:3001'
// const devUrl = 'https://dev-rest-api.herokuapp.com'
const baseUrl = localUrl

const API = {
  LOG_IN: {
    BASE: `${baseUrl}/auth/log-in`
  },
  THING: {
    BASE: `${baseUrl}/thing`,
    GET_BY_COLOR_ID: colorId => `${API.THING.BASE}?colorId=${colorId}`,
    GET_BY_TYPE_ID: typeId => `${API.THING.BASE}?typeId=${typeId}`
  },
  THING_TASK: {
    BASE: `${baseUrl}/thing-task`,
    GET_BY_THING_ID: thingId => `${API.THING_TASK.BASE}?thingId=${thingId}`
  },
  THING_TODO: {
    BASE: `${baseUrl}/thing-todo`,
    GET_BY_THING_ID: thingId => `${API.THING_TODO.BASE}?thingId=${thingId}`
  },
  TODO: {
    BASE: `${baseUrl}/to-do` //to-do or post to test
  },
  USER: {
    BASE: `${baseUrl}/user`
  }
}

export default API
