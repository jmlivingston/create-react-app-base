const localUrl = 'http://localhost:3001'
// const devUrl = 'https://dev-rest-api.herokuapp.com'
const baseUrl = localUrl

const API = {
  LOG_IN: {
    BASE: `${baseUrl}/auth/log-in`
  },
  TODO: {
    BASE: `${baseUrl}/to-do` //to-do or post to test
  },
  USER: {
    BASE: `${baseUrl}/user`
  }
}

export default API
