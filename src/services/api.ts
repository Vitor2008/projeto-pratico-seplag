import axios from 'axios'

const api = axios.create({
  baseURL: 'https://abitus-api.geia.vip/api',
})

export default api
