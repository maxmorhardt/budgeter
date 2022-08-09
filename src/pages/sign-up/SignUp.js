import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import { useToasts } from 'react-toast-notifications'
import { auth } from '../../api/auth'
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const navigateToLogIn = () => {
    navigate('/log-in')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      setLoading(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
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
          <button type='button' className='log-in-sign-up-page-button' onClick={navigateToLogIn}>Log In</button>
        </div>
      </form>
    </div>
  )
}

const AlertError = ({ content }) => {
  const { addToast } = useToasts()
  return (
    <button onClick={() => addToast(content, {
      appearance: 'error',
      autoDismiss: true,
    })}>
      Add Toast
    </button>
  )
}

export default SignUp