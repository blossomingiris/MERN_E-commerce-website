import axios from 'axios'

export const userLoginApiRequest = async (email, password) => {
  const { data } = await axios.post('/api/users/login', { email, password })
  localStorage.setItem('userInfo', JSON.stringify(data.userLoggedIn))
  return data
}
