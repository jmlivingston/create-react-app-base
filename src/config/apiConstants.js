const localUrl = 'http://localhost:3001'
// const devUrl = 'https://dev-rest-api.herokuapp.com'
const baseUrl = localUrl

const API = {
  LOG_IN: {
    BASE: `${baseUrl}/Auth/LogIn`
  },
  TODO: {
    BASE: `${baseUrl}/post` //to-do or post to test
  },
  USER: {
    BASE: `${baseUrl}/user`
  }
}

export default API
