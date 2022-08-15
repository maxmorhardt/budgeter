import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import axios from 'axios'
import { API_PATH } from '../../helpers/environ'
import './LogIn.css'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const navigateToSignUp = () => {navigate('/sign-up')}

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  } ,[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      return setErrorMessage('Please fill in all fields')
    }
    setLoading(true)
    axios({
      method: 'POST',
      url:  API_PATH + '/api/auth/log-in',
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        navigate('/')
      })
      .catch(err => {setErrorMessage(err.response.data.message)})
      .finally(() => {setLoading(false)})
  }

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage)
    }
  } , [errorMessage])

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
        <button disabled={loading} className='submit-log-in-button' type='submit' onClick={handleSubmit}>Log In</button>
        <div className='line'></div>
        <div className='log-in-box-bottom-container'>
          <p className='no-account-text'>Don't have an account?</p>
          <button type='button' className='sign-up-log-in-page-button' onClick={navigateToSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn