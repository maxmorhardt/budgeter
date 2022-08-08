import React from 'react'
import './textinput.css'

const TextInput = ({placeholder, value, onChange, type}) => {
  return (
    <input
      className='TextInput'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput;