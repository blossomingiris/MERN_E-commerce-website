import axios from 'axios'

export const createOrder = async (orderData) => {
  const { data } = await axios.post('/api/orders/create', { ...orderData })
  return data
}
