import axios from 'axios'

export const getOrders = async () => {
  const { data } = await axios.get('/api/orders')
  return data
}
