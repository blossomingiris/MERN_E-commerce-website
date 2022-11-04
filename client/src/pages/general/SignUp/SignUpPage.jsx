import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setReduxUserState } from '../../../redux/actions/userActions'
import axios from 'axios'
import InputForm from '../../.././components/Auth/InputForm'

function SignUpPage() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const dispatch = useDispatch()
  const [responseStateRegisterUser, setResponseStateRegisterUser] = useState({
    success: '',
    error: '',
  })

  const navigate = useNavigate()

  //todo: for refactoring code
  const inputs = [
    {
      name: 'name',
      type: 'text',
      errorMessage:
        'Name should be 2-16 characters and should not include any special character',
      label: 'Name',
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },

    {
      name: 'lastName',
      type: 'text',
      errorMessage:
        'Last name should be 2-16 characters and should not include any special character',
      label: 'Last Name',
      pattern: `^[A-Za-z0-9]{2,16}$`,
      required: true,
    },

    {
      name: 'email',
      type: 'email',
      errorMessage: 'Please enter valid e-mail address',
      label: 'E-mail',
      required: true,
    },

    {
      name: 'password',
      type: 'password',
      errorMessage:
        'Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character',
      label: 'Password',
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      errorMessage: 'Both passwords should match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = values.name
    const email = values.email
    const lastName = values.lastName
    const password = values.password

    if (
      name &&
      lastName &&
      email &&
      password &&
      password === values.confirmPassword
    ) {
      registerNewUserApiRequest(name, lastName, email, password)
        .then((data) => {
          dispatch(setReduxUserState(data.userCreated))
          if (data.success === 'User created successfully')
            setResponseStateRegisterUser({ success: data.success })
          //delay before redirecting to user profile page
          setTimeout(function () {
            navigate('/user', { replace: true })
          }, 3000)
        })
        .catch((er) =>
          setResponseStateRegisterUser({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        )
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  //Api request to register new user

  const registerNewUserApiRequest = async (name, lastName, email, password) => {
    const { data } = await axios.post('/api/users/register', {
      name,
      lastName,
      email,
      password,
    })
    return data
  }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>Sign Up</p>
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

          <div
            className={
              responseStateRegisterUser &&
              responseStateRegisterUser.error ===
                'user with this email already exists'
                ? 'a_user_alert_success'
                : 'a_user_alert_hidden'
            }
          >
            An account with email address <b>{values.email}</b> already exists.
            Please login using this email address or reset the password.
          </div>
          <div
            className={
              responseStateRegisterUser &&
              responseStateRegisterUser.success === 'User created successfully'
                ? 'a_user_alert_success'
                : 'a_user_alert_hidden'
            }
          >
            Your account was successfully created!
          </div>
        </form>
        <div className='a_link'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
