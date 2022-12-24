import axios from 'axios'

// get user profile data
export const getUser = async (id) => {
  const { data } = await axios.get('/api/users/profile/' + id)
  return data
}

//update order with paid info in db
export const updateOrder = async (orderID) => {
  const { data } = await axios.put('/api/orders/paid/' + orderID)
  return data
}

//update order with payment method in db
export const updatePaymentMethod = async (orderID, paymentMethod) => {
  const { data } = await axios.put('/api/orders/payment/' + orderID, {
    paymentMethod: paymentMethod,
  })
  return data
}
