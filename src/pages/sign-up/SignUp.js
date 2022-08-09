import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import './SignUp.css'

const SignUp = () => {
  const navigate = useNavigate()
  const handleLogInClick = () => {
    navigate('/log-in')
  }
  return (
    <div>
      <h1 className='budgeter-text-sign-up'>Budgeter</h1>
      <form className='sign-up-box'>
        <FormInput type='text' placeholder='Email' />
        <FormInput type='password' placeholder='Password' />
        <FormInput type='password' placeholder='Confirm Password' />
        <button className='submit-sign-up-button' type='submit'>Sign Up</button>
        <div className='line'></div>
        <div className='sign-up-bottom-container'>
          <p className='already-have-account'>Already have an account?</p>
          <button className='log-in-sign-up-page-button' onClick={handleLogInClick}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp