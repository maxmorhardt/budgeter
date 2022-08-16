import React from 'react'

const FormInput = ({placeholder, value, onChange, type}) => {
  return (
    <input
      className='w-11/12 h-10 rounded-md border-2 border-solid border-[#a5a5a5] pl-2.5 text-xl mb-5'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default FormInput;