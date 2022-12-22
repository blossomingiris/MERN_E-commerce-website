import axios from 'axios'

//get products from specific category
export const getCategoryProducts = async (name) => {
  const { data } = await axios.get(`/api/products/category/${name}`)
  return data
}
