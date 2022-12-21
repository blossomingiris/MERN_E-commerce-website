import axios from 'axios'

export const fetchUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`)
  return data
}

export const updateUser = async (userId, name, lastName, email, isAdmin) => {
  const { data } = await axios.put(`/api/users/${userId}`, {
    name,
    lastName,
    email,
    isAdmin,
  })
  return data
}
