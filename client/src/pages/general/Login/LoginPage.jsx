import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import uuid from 'react-uuid'

import styles from './LoginPage.module.scss'
import InputForm from '../../../components/Auth/InputForm'

function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const inputs = [
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
      label: 'Password',
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
        <p className='a_form_title'>Log in</p>
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
          <div>
            <button className={styles.google_button}>
              <FaGoogle className={styles.icon}></FaGoogle>
              Login with Google
            </button>
            <div className='a_user_alert'>Wrong password!</div>
          </div>
        </form>
        <div className='a_link'>
          Do not have an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
