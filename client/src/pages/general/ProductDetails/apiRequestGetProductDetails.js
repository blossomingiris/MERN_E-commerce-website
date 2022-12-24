import axios from 'axios'

export const getProductDetails = async (id) => {
  const { data } = await axios.get(`/api/products/get-one/${id}`)
  return data
}
