const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const socket = io()

export { api, socket }