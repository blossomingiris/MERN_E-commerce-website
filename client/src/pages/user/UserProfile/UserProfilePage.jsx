import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setReduxUserState } from '../../../redux/actions/userActions'
import InputForm from '../../../components/Auth/InputForm'
import {
  updateUserProfileRequest,
  fetchUpdatedUserProfile,
} from './apiRequestUpdateProfile'

function UserProfilePage() {
  //store multiple user input
  const inputRef = useRef({})

  //db message handler
  const [updateUserMsgResponse, setUpdateUserMsgResponse] = useState({
    success: '',
    error: '',
  })

  //store updated user profile data
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
      defaultValue: userInfo.name,
    },

    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      defaultValue: userInfo.lastName,
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
      required: true,
      defaultValue: updatedUserProfile.phoneNumber,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      required: true,
      defaultValue: updatedUserProfile.address,
    },
    {
      name: 'country',
      type: 'text',
      label: 'country',
      defaultValue: updatedUserProfile.country,
      required: true,
    },

    {
      name: 'postcode',
      type: 'text',
      label: 'postcode',
      defaultValue: updatedUserProfile.postcode,
      required: true,
    },

    {
      name: 'city',
      type: 'text',
      label: 'city',
      defaultValue: updatedUserProfile.city,
      required: true,
    },

    {
      name: 'state',
      type: 'text',
      label: 'state',
      defaultValue: updatedUserProfile.state,
      required: true,
    },
  ]

  const dispatch = useDispatch()

  //submit update user profile
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = inputRef.current[0].value || userInfo.name
    const lastName = inputRef.current[1].value || userInfo.lastName
    const phoneNumber = inputRef.current[3].value
    const address = inputRef.current[4].value
    const country = inputRef.current[5].value
    const postcode = inputRef.current[6].value
    const city = inputRef.current[7].value
    const state = inputRef.current[8].value

    updateUserProfileRequest(
      name,
      lastName,
      phoneNumber,
      address,
      country,
      postcode,
      city,
      state
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
        if (updatedUserProfile) {
          window.location.href = '/user'
        } else {
          window.history.back()
        }
      })
      .catch((err) =>
        setUpdateUserMsgResponse({
          error: err.response.data.message
            ? err.response.data.message
            : err.response.data,
        })
      )
  }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>My Profile</p>
        <form className='a_inputs_group_container'>
          {inputs.map((input, idx) => (
            <InputForm
              key={`${input}${idx}`}
              {...input}
              refs={(el) => (inputRef.current[idx] = el)}
            />
          ))}
          <p className='required_fields'>* required fields</p>
          <button className='a_submit_button' onClick={handleSubmit}>
            Submit
          </button>
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
