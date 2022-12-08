import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setReduxUserState } from '../../redux/actions/userActions'
import InputForm from '../../components/Auth/InputForm'
import axios from 'axios'

function UserProfilePage() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    postcode: '',
    country: '',
    city: '',
    state: '',
    // password: '',
    // confirmPassword: '',
  })

  const [updateUserMsgResponse, setUpdateUserMsgResponse] = useState({
    success: '',
    error: '',
  })

  //update user profile data

  const [updatedUserProfile, setUpdatedUserProfile] = useState({})

  //read user id from redux to fetch user profile data
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)

  //update user profile page with fetched data

  useEffect(() => {
    fetchUpdatedUserProfile(userInfo._id)
      .then((data) => setUpdatedUserProfile(data))
      .catch((er) => console.log(er))
  }, [])

  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: userInfo.name,
    },

    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      placeholder: userInfo.lastName,
    },

    {
      type: 'email',
      label: 'E-mail',
      required: true,
      disabled: true,
      defaultValue: userInfo.email,
    },

    {
      name: 'phoneNumber',
      type: 'text',
      label: 'phone',
      // placeholder: 'Enter your phone number',
      placeholder: updatedUserProfile.phoneNumber,
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      // placeholder: 'Enter your street name and house number',
      placeholder: updatedUserProfile.address,
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      label: 'country',
      // placeholder: 'Enter your country',
      placeholder: updatedUserProfile.country,
      required: true,
    },

    {
      name: 'postcode',
      type: 'text',
      label: 'postcode',
      // placeholder: 'Enter your postcode',
      placeholder: updatedUserProfile.postcode,
      required: true,
    },

    {
      name: 'city',
      type: 'text',
      label: 'city',
      // placeholder: 'Enter your city',
      placeholder: updatedUserProfile.city,
      required: true,
    },

    {
      name: 'state',
      type: 'text',
      label: 'state',
      // placeholder: 'Enter your state',
      placeholder: updatedUserProfile.state,
      required: true,
    },

    // {
    //   name: 'password',
    //   type: 'password',
    //   errorMessage:
    //     'Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character',
    //   label: 'Change password',
    //   placeholder: 'Enter new password',
    //   // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
    // },
    // {
    //   name: 'confirmPassword',
    //   type: 'password',
    //   errorMessage: 'Both passwords should match',
    //   label: 'Confirm new password',
    //   pattern: values.password,
    //   placeholder: 'Confirm new password',
    // },
  ]

  const dispatch = useDispatch()

  //submit update user profile
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = values.name
    const lastName = values.lastName
    const address = values.address
    const postcode = values.postcode
    const phoneNumber = values.phoneNumber
    const country = values.country
    const city = values.city
    const state = values.state
    // const password = values.password

    updateUserProfileRequest(
      name,
      lastName,
      phoneNumber,
      address,
      country,
      postcode,
      city,
      state
      // password
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

        window.location.href = '/cart'
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
    phoneNumber,
    address,
    country,
    postcode,
    city,
    state
    // password
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
      // password,
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
          <p className='required_fields'>(*)required fields</p>
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
