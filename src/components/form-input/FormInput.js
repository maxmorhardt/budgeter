import React from 'react'
import './FormInput.css'

const FormInput = ({placeholder, value, onChange, type}) => {
  return (
    <input
      className='form-input'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default FormInput;