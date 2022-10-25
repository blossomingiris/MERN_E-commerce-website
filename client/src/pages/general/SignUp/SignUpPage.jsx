import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import InputForm from '../../.././components/Auth/InputForm'

function SignUpPage() {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      name: 'name',
      defaultValue: 'My default value',
      type: 'text',
      errorMessage:
        'Name should be 3-16 characters and should not include any special character',
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },

    {
      name: 'surname',
      type: 'text',
      errorMessage:
        'Surname should be 3-16 characters and should not include any special character',
      label: 'Surname',
      pattern: '^[A-Za-z0-9]{3,16}$',
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
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
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
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>Sign Up</p>
        <form className='a_inputs_group_container' onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <InputForm
              key={uuid()}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          ))}
          <button className='a_submit_button'>Submit</button>

          <div className='a_user_alert'>
            User with that email already exists!
          </div>
          <div className='a_user_alert_success'>
            User account was successfully created!
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
