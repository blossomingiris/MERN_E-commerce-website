import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setReduxUserState } from '../../../redux/actions/userActions'
import { Link } from 'react-router-dom'
import { userLoginApiRequest } from './apiRequestLogin'
import InputForm from '../../../components/Auth/InputForm'

function LoginPage() {
  //input data for login form
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

          if (res.success === 'user logged in' && !res.userLoggedIn.isAdmin) {
            window.location.href = '/user'
          } else {
            window.location.href = '/admin/users'
          }
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
          <p className='required_fields'>* required fields </p>
          <button className='a_submit_button'>Submit</button>
          <div>
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
