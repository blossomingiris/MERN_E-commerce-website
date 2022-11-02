import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setReduxUserState } from '../../redux/actions/userActions'
import InputForm from '../../components/Auth/InputForm'
import axios from 'axios'

function UserProfilePage() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    postcode: '',
    country: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
  })

  const [updateUserMsgResponse, setUpdateUserMsgResponse] = useState({
    success: '',
    error: '',
  })

  //update user profile data

  const [updatedUserProfile, setUpdatedUserProfile] = useState({})

  //read user id from redux to fetch user profile data
  const { userInfo } = useSelector((state) => state.userRegisterLogin)

  //update user profile page with fetched data

  useEffect(() => {
    fetchUpdatedUserProfile(userInfo._id)
      .then((data) => setUpdatedUserProfile(data))
      .catch((er) => console.log(er))
  }, [userInfo._id])

  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: updatedUserProfile.name,
    },

    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      placeholder: updatedUserProfile.lastName,
    },

    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
      required: true,
      disabled: true,
      placeholder: updatedUserProfile.email,
    },

    {
      name: 'phoneNumber',
      type: 'text',
      label: 'phone',
      // placeholder: 'Enter your phone number',
      placeholder: updatedUserProfile.phoneNumber,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      // placeholder: 'Enter your street name and house number',
      placeholder: updatedUserProfile.address,
    },
    {
      name: 'country',
      type: 'text',
      label: 'country',
      // placeholder: 'Enter your country',
      placeholder: updatedUserProfile.country,
    },

    {
      name: 'postcode',
      type: 'text',
      label: 'postcode',
      // placeholder: 'Enter your postcode',
      placeholder: updatedUserProfile.postcode,
    },

    {
      name: 'city',
      type: 'text',
      label: 'city',
      // placeholder: 'Enter your city',
      placeholder: updatedUserProfile.city,
    },

    {
      name: 'state',
      type: 'text',
      label: 'state',
      // placeholder: 'Enter your state',
      placeholder: updatedUserProfile.state,
    },

    {
      name: 'password',
      type: 'password',
      errorMessage:
        'Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character',
      label: 'Change password',
      placeholder: 'Enter new password',
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      errorMessage: 'Both passwords should match',
      label: 'Confirm new password',
      pattern: values.password,
      placeholder: 'Confirm new password',
    },
  ]

  const dispatch = useDispatch()

  //submit update user profile
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = values.name
    const lastName = values.lastName
    const email = values.email
    const address = values.address
    const postcode = values.postcode
    const phoneNumber = values.phoneNumber
    const country = values.country
    const city = values.city
    const state = values.state
    const password = values.password

    updateUserProfileRequest(
      name,
      lastName,
      email,
      phoneNumber,
      address,
      country,
      postcode,
      city,
      state,
      password
    )
      .then((data) => {
        setUpdateUserMsgResponse({ success: data.success, error: '' })

        dispatch(
          setReduxUserState({
            ...data.userUpdated,
          })
        )

        window.localStorage.setItem(
          'userInfo',
          JSON.stringify({ ...data.userUpdated })
        )
      })
      .catch((err) =>
        setUpdateUserMsgResponse({
          error: err.response.data.message
            ? err.response.data.message
            : err.response.data,
        })
      )
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  //api request to update user profile with additional information information
  const updateUserProfileRequest = async (
    name,
    lastName,
    email,
    phoneNumber,
    address,
    country,
    postcode,
    city,
    state,
    password
  ) => {
    const { data } = await axios.put('api/users/profile', {
      name,
      lastName,
      email,
      phoneNumber,
      address,
      country,
      postcode,
      city,
      state,
      password,
    })
    return data
  }

  //fetch updated user profile information from db

  const fetchUpdatedUserProfile = async (id) => {
    const { data } = await axios.get('api/users/profile/' + id)
    return data
  }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>My Profile</p>
        <form className='a_inputs_group_container' onSubmit={handleSubmit}>
          {inputs.map((input, idx) => (
            <InputForm
              key={idx}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          ))}
          <button className='a_submit_button'>Submit</button>
          {updateUserMsgResponse.success &&
          updateUserMsgResponse.success === 'user updated' ? (
            <div className='a_user_alert_success'>
              Your account was successfully updated!
            </div>
          ) : updateUserMsgResponse.error ? (
            <div className='a_user_alert_failure'>
              Something went wrong! Try again.
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default UserProfilePage
