import React from 'react'
import { useState } from 'react'
import styles from './InputForm.module.scss'

function InputForm(props) {
  const [focused, setFocused] = useState(false)
  const { label, handleChange, errorMessage, ...inputProps } = props

  console.log(inputProps)

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <>
      {/* <div className={styles.input_form}>
        <input {...inputProps} onChange={handleChange} />
        <label className={styles.label_name}>
          <p className={styles.content_name}>{label}</p>
          <span className={styles.error_message}>{errorMessage}</span>
        </label>
				
      </div> */}
      <div className={styles.form_input}>
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={handleChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === 'confirmPassword' && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  )
}

export default InputForm
