import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  // Navigate to the log in page when the user clicks the log in button
  const navigateToLogIn = () => {
    navigate('/log-in')
  }

  return (
    <div>
      <h1 className='budgeter-text-sign-up'>Budgeter</h1>
      <form className='sign-up-box'>
        <FormInput 
          value = {email}
          type='text' 
          placeholder='Email' 
          onChange={(event) => {
            setEmail(event.target.value)
            console.log(email)
          }} />
        <FormInput 
          value = {password}
          type='password' 
          placeholder='Password' 
          onChange={(event) => {
            setPassword(event.target.value)
            console.log(password)
          }} />
        <FormInput 
          value = {confirmPassword}
          type='password' 
          placeholder='Confirm Password' 
          onChange={(event) => {
            setConfirmPassword(event.target.value)
            console.log(confirmPassword)
          }} />
        <button className='submit-sign-up-button' type='submit'>Sign Up</button>
        <div className='line'></div>
        <div className='sign-up-bottom-container'>
          <p className='already-have-account'>Already have an account?</p>
          <button className='log-in-sign-up-page-button' onClick={navigateToLogIn}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp