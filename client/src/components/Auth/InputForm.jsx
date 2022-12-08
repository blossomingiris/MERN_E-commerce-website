import { useState } from 'react'
import styles from './InputForm.module.scss'

function InputForm(props) {
  const [focused, setFocused] = useState(false)
  const { label, handleChange, errorMessage, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className={styles.form_input}>
      <label>{label}*</label>
      <input
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        {...inputProps}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default InputForm
