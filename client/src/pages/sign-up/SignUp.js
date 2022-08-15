import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import { toast } from 'react-toastify'
import toastConfigs from '../../helpers/toastConfigs'
import axios from 'axios'
import { API_PATH } from '../../helpers/environ'
import './SignUp.css'

// Sign up page
const SignUp = () => {
  // Hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Initial checks and setup
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  } ,[]) // eslint-disable-line react-hooks/exhaustive-deps

  // Notifications for errors
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, toastConfigs)
    }
    setErrorMessage('')
  } ,[errorMessage])
  
  // Signs up users and sends them to the home page
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password || !confirmPassword) {
      return setErrorMessage('Please fill in all fields')
    }
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email)) {
      return setErrorMessage('Please enter a valid email')
    }
    if (password.length < 6) {
      return setErrorMessage('Password must be at least 6 characters')
    }
    if (password !== confirmPassword) {
      return setErrorMessage('Passwords do not match')
    }
    setLoading(true)
    axios.post(`${API_PATH}/api/auth/sign-up`, { email, password })
      .then(res => {
        toast.success('Signed up successfully!', toastConfigs)
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }).catch(err => {
        setErrorMessage(err.response.data.message)
      }).finally(() => {
        setLoading(false)
      })
  }

  // Render sign up page
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
          <button 
            type='button' 
            className='log-in-sign-up-page-button' 
            onClick={() =>
              navigate('/log-in')
            }>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp