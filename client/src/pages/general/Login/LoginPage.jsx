import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setReduxUserState } from '../../../redux/actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import axios from 'axios'
import styles from './LoginPage.module.scss'
import InputForm from '../../../components/Auth/InputForm'

function LoginPage() {
  //input data for form

  const inputs = [
    {
      name: 'email',
      type: 'email',
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

  //grab users inputs
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  //message for users for success/failure logged in
  const [responseState, setResponseState] = useState(false)

  const navigate = useNavigate()

  const reduxDispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = values.email
    const password = values.password

    if (email && password) {
      userLoginApiRequest(email, password)
        .then((res) => {
          //set user data to redux store
          if (res.userLoggedIn) {
            reduxDispatch(setReduxUserState(res.userLoggedIn))
          }

          if (res.success === 'user logged in' && !res.userLoggedIn.isAdmin)
            navigate('/user', { replace: true })
          else navigate('/admin/users', { replace: true })
        })

        .catch((err) => {
          console.log(err)
          setResponseState(true)
        })
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const userLoginApiRequest = async (email, password) => {
    const { data } = await axios.post('/api/users/login', { email, password })
    localStorage.setItem('userInfo', JSON.stringify(data.userLoggedIn))
    return data
  }

  //login with google account

  // const google = () => {
  //   window.open('http://localhost:5000/api/users/google/callback', '_self')
  // }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>Log in</p>
        <form className='a_inputs_group_container' onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <InputForm
              key={index}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          ))}
          <button className='a_submit_button'>Submit</button>
          {/* <div className={styles.login_options}>OR</div> */}
          <div>
            {/* <button className={styles.button_google_login} onClick={google}>
              <FaGoogle className={styles.icon}></FaGoogle>
              Login with Google
            </button> */}
            <div
              className={
                responseState ? 'a_user_alert_show' : 'a_user_alert_hidden'
              }
            >
              Wrong e-mail or password!
            </div>
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
