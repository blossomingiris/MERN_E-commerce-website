import axios from 'axios'

//fetch user profile data from db
export const getUser = async (id) => {
  const { data } = await axios.get('/api/users/profile/' + id)
  return data
}

//fetch order details data from db
export const getOrder = async (orderId) => {
  const { data } = await axios.get('/api/orders/user/' + orderId)
  return data
}
