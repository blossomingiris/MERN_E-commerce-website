import axios from 'axios'

export const registerNewUserApiRequest = async (
  name,
  lastName,
  email,
  password
) => {
  const { data } = await axios.post('/api/users/register', {
    name,
    lastName,
    email,
    password,
  })
  return data
}
