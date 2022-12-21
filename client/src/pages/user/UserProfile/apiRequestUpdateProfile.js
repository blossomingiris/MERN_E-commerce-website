import axios from 'axios'

//api request to update user profile with additional information information
export const updateUserProfileRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  postcode,
  city,
  state
) => {
  const { data } = await axios.put('api/users/profile', {
    name,
    lastName,
    phoneNumber,
    address,
    country,
    postcode,
    city,
    state,
  })
  return data
}

//fetch updated user profile information from db
export const fetchUpdatedUserProfile = async (id) => {
  const { data } = await axios.get('api/users/profile/' + id)
  return data
}
