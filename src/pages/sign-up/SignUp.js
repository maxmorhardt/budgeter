import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import { AuthProvider, useAuth } from '../../contexts/AuthContext'
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()
  // Navigate to the log in page when the user clicks the log in button
  const navigateToLogIn = () => {
    navigate('/log-in')
  }
  // Sign up the user when the user clicks the sign up button
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      try {
        setLoading(true)
        setError('')
        await signUp(email, password)
      } catch (error) {
        setError(error.message)
      }
    } else {
      return setError('Passwords do not match')
    }
    setLoading(false)
  }
  return (
    <AuthProvider>
      <h1 className='budgeter-text-sign-up'>Budgeter</h1>
      <form className='sign-up-box'>
        <FormInput 
          value = {email}
          type='text' 
          placeholder='Email' 
          onChange={(event) => {
            setEmail(event.target.value)
          }} />
        <FormInput 
          value = {password}
          type='password' 
          placeholder='Password' 
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        <FormInput 
          value = {confirmPassword}
          type='password' 
          placeholder='Confirm Password' 
          onChange={(event) => {
            setConfirmPassword(event.target.value)
          }} />
        <button disabled={loading} className='submit-sign-up-button' type='submit' onClick={handleSubmit}>Sign Up</button>
        <div className='line'></div>
        <div className='sign-up-bottom-container'>
          <p className='already-have-account'>Already have an account?</p>
          <button className='log-in-sign-up-page-button' onClick={navigateToLogIn}>Log In</button>
        </div>
      </form>
    </AuthProvider>
  )
}

export default SignUp