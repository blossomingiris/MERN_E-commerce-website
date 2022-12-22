import axios from 'axios'

export const getCategories = async () => {
  const { data } = await axios.get('/api/categories')
  return data
}
