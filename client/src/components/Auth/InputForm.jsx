import { useState } from 'react'
import styles from './InputForm.module.scss'

function InputForm(props) {
  const [focused, setFocused] = useState(false)
  const {
    label,
    handleChange,
    errorMessage,
    refs,
    checkedCheckbox,
    ...inputProps
  } = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  // const handleChanges = (e) => {
  //   // handleChange()
  //   checkedCheckbox(e)
  // }

  return (
    <div className={styles.form_input}>
      {' '}
      <label>{label}*</label>
      <input
        onChange={(e) => checkedCheckbox(e)}
        onBlur={handleFocus}
        onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        {...inputProps}
        ref={refs}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default InputForm
