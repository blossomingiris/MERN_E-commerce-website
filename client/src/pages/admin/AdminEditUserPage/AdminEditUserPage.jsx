import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUser, updateUser } from './apiRequestUpdateUser'
import styles from './AdminEditUserPage.module.scss'
import InputForm from '../../../components/Auth/InputForm'
import AdminLinks from '../../../components/AdminLinks/AdminLinks'

function AdminEditUserPage() {
  //store multiple user input
  const inputRef = useRef({})

  const { id } = useParams()

  //store user profile data
  const [userProfile, setUserProfileData] = useState([])
  const [hasAdminAccess, setHasAdminAccess] = useState(false)

  //db message handler
  const [updateUserMsgResponse, setUpdateUserMsgResponse] = useState({
    success: '',
    error: '',
  })

  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      defaultValue: userProfile.name,
    },

    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      defaultValue: userProfile.lastName,
    },

    {
      type: 'email',
      label: 'E-mail',
      required: true,
      defaultValue: userProfile.email,
    },

    {
      type: 'checkbox',
      label: 'Is Administrator',
      checked: hasAdminAccess,
    },
  ]

  //toggle is Administrator checkbox
  const checkedCheckbox = (e) => {
    setHasAdminAccess((current) => !current)
  }

  //fetch user by id from db
  useEffect(() => {
    fetchUser(id)
      .then((data) => {
        setUserProfileData(data)
        setHasAdminAccess(data.isAdmin)
      })
      .catch((er) => console.log(er))
  }, [id])

  //update user profile
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = inputRef.current[0].value
    const lastName = inputRef.current[1].value
    const email = inputRef.current[2].value

    updateUser(id, name, lastName, email, hasAdminAccess)
      .then((data) => {
        setUpdateUserMsgResponse({ success: data.success, error: '' })
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
    <div>
      <div className={styles.admin_links_wrapper}>
        <AdminLinks />
      </div>
      <div className='a_container'>
        <div className='a_form_wrapper'>
          <p className='a_form_title'>Edit User Profile</p>
          <form className='a_inputs_group_container'>
            {inputs.map((input, idx) => (
              <InputForm
                key={`${input}${idx}`}
                {...input}
                refs={(el) => (inputRef.current[idx] = el)}
                checkedCheckbox={checkedCheckbox}
              />
            ))}
            <p className='required_fields'>required fields(*)</p>
            <button className='a_submit_button' onClick={handleSubmit}>
              Update
            </button>
            {updateUserMsgResponse.success &&
            updateUserMsgResponse.success === 'user updated' ? (
              <div className='a_user_alert_success'>
                The user profile was successfully updated!
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
    </div>
  )
}

export default AdminEditUserPage
