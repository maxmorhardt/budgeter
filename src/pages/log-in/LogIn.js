import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import './LogIn.css'

const LogIn = () => {
  const navigate = useNavigate()
  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  return (
    <div>
      <h1 className='budgeter-text-log-in-page'>Budgeter</h1>
      <form className='log-in-box'>
        <FormInput type='text' placeholder='Email' />
        <FormInput type='password' placeholder='Password' />
        <button className='submit-log-in-button' type='submit'>Log In</button>
        <div className='line'></div>
        <div className='log-in-box-bottom-container'>
          <p className='no-account-text'>Don't have an account?</p>
          <button className='sign-up-log-in-page-button' onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </form>
      <div className='forgot-password-log-in-page-container'>
        <a className='forgot-password-log-in-page-text' href='/forgot-password'>Forgot your password?</a>
      </div>
    </div>
  )
}

export default LogIn;