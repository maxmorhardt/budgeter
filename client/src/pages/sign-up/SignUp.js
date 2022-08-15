import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../components/form-input'
import axios from 'axios'
import { API_PATH } from '../../helpers/environ'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const navigateToLogIn = () => {navigate('/log-in')}

  useEffect(() => {
    token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  } ,[])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      return setErrorMessage('Please fill in all fields')
    }
    if (password !== confirmPassword) {
      return setErrorMessage('Passwords do not match')
    }
    if (password.length < 6) {
      return setErrorMessage('Password must be at least 6 characters')
    }
    setLoading(true)
    axios({
      method: 'POST',
      url:  API_PATH + '/api/auth/sign-up',
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

  // REMOVE THIS ONCE ALERTS ARE IMPLEMENTED
  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage)
    }
  } , [errorMessage])

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

// const AlertError = ({ content }) => {
//   const { addToast } = useToasts()
//   return (
//     <button onClick={() => addToast(content, {
//       appearance: 'error',
//       autoDismiss: true,
//     })}>
//       Add Toast
//     </button>
//   )
// }

export default SignUp