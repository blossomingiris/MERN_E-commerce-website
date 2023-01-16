//fetch products from db

import axios from 'axios'

export const getListOfProducts = async () => {
  const { data } = await axios.get('/api/products/admin')
  return data
}

//delete product from db
export const deleteProduct = async (productId) => {
  const { data } = await axios.delete(
    `/api/products/admin-dashboard/delete-one/${productId}`
  )
  return data
}
