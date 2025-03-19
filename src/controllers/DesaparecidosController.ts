import api from '../services/api'

export const getDesaparecidos = async () => {
  const response = await api.get('/desaparecidos')
  return response.data
}
