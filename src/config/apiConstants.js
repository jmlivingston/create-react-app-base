const localUrl = 'http://localhost:3001'
// const devUrl = 'https://dev-rest-api.herokuapp.com'
const baseUrl = localUrl

const API = {
  LOGIN: {
    BASE: `${baseUrl}/auth/login`
  },
  TODO: {
    BASE: `${baseUrl}/to-do`
  },
  USER: {
    BASE: `${baseUrl}/user`
  }
}

export default API
