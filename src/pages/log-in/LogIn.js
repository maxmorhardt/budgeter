import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import './LogIn.css'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { logIn } = useUserAuth()
  const navigate = useNavigate()

  const navigateToSignUp = () => {
    navigate('/sign-up')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setLoading(true)
    // try {
    //   const res = await logIn(email, password)
    //   navigate('/')
    // } catch (error) {
    //   setErrorMessage(error.message)
    // } finally {
    //   setLoading(false)
    // }
  }

  // useEffect(() => {
  //   if (errorMessage) {
  //     alert(errorMessage)
  //   }
  // } , [errorMessage])

  return (
    <div>
      <h1 className='budgeter-text-log-in-page'>Budgeter</h1>
      <form className='log-in-box'>
        <FormInput
          value = {email}
          type='text' 
          placeholder='Email' 
          onChange={(event) => {
            setEmail(event.target.value)
          }} />
        <FormInput 
          value={password}
          type='password' 
          placeholder='Password' 
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        <button className='submit-log-in-button' type='submit' onClick={handleSubmit}>Log In</button>
        <div className='line'></div>
        <div className='log-in-box-bottom-container'>
          <p className='no-account-text'>Don't have an account?</p>
          <button type='button' className='sign-up-log-in-page-button' onClick={navigateToSignUp}>Sign Up</button>
        </div>
      </form>
      <div className='forgot-password-log-in-page-container'>
        <a className='forgot-password-log-in-page-text' href='/forgot-password'>Forgot your password?</a>
      </div>
    </div>
  )
}

export default LogIn