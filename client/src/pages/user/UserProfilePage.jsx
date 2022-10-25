import React from 'react'
import { useState } from 'react'
import InputForm from '../../components/Auth/InputForm'
import uuid from 'react-uuid'

function UserProfilePage() {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    country: '',
    city: '',
    state: '',
  })

  const inputs = [
    {
      defaultValue: 'Jane',
      label: 'Name',
      type: 'text',
      required: true,
    },

    {
      type: 'text',
      defaultValue: 'Doe',
      label: 'Surname',
      required: true,
    },

    {
      type: 'email',
      defaultValue: 'janedoe@example.com',
      errorMessage: 'Please enter valid e-mail address',
      label: 'E-mail',
      required: true,
    },

    {
      type: 'text',
      label: 'phone',
      placeholder: 'Enter your phone number',
      defaultValue: '',
    },
    {
      type: 'text',
      label: 'Address',
      placeholder: 'Enter your street name and house number',
      defaultValue: '',
    },
    {
      type: 'text',
      label: 'country',
      placeholder: 'Enter your country',
      defaultValue: '',
    },

    {
      type: 'text',
      label: 'postcode',
      placeholder: 'Enter your postcode',
      defaultValue: '',
    },

    {
      type: 'text',
      label: 'city',
      placeholder: 'Enter your city',
      defaultValue: '',
    },

    {
      type: 'text',
      label: 'state',
      placeholder: 'Enter your state',
      defaultValue: '',
    },

    // {
    //   name: 'password',
    //   type: 'password',
    //   errorMessage:
    //     'Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character',
    //   label: 'Password',
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
    //   required: true,
    // },
    // {
    //   name: 'confirmPassword',
    //   type: 'password',
    //   errorMessage: 'Both passwords should match',
    //   label: 'Confirm Password',
    //   pattern: values.password,
    //   required: true,
    // },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    // setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='a_container'>
      <div className='a_form_wrapper'>
        <p className='a_form_title'>My Profile</p>
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
          <div className='a_user_alert_success'>Your account was updated!</div>
        </form>
      </div>
    </div>
  )
}

export default UserProfilePage
