import axios from 'axios'

//fetch best selling products from db
export const getBestSellingProducts = async () => {
  const { data } = await axios.get('api/products/popular')
  return data
}
