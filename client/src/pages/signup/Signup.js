import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import toastConfigs from '../../helpers/toastConfigs'
import { API_PATH } from '../../helpers/environ'
import FormInput from '../../components/form-input'

// Sign up page
const Signup = () => {
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
      navigate('/dashboard')
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
    axios.post(`${API_PATH}/api/auth/signup`, { email, password })
      .then(res => {
        toast.success('Signed up successfully!', toastConfigs)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('uid', res.data.uid)
        navigate('/dashboard')
      }).catch(err => {
        setErrorMessage(err.response.data.message)
      }).finally(() => {
        setLoading(false)
      })
  }

  // Render sign up page
  return (
    <div>
      <h1 className='font-budgeter text-6xl font-bold text-budgeter-blue text-center mt-10 mb-10'>
        Budgeter
      </h1>
      <form className='w-box h-box flex flex-col justify-center items-center m-auto bg-white rounded-3xl shadow-box'>
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
        <button 
          className='w-5/6 h-10 rounded-md border border-solid border-white bg-budgeter-blue color text-white text-xl cursor-pointer' 
          type='submit' 
          disabled={loading} 
          onClick={handleSubmit}>
            Sign Up
        </button>
        <hr className='w-11/12 h-[1.5px] bg-black mt-8' />
        <div className='flex flex-col justify-center items-center mt-5'>
          <p className='text-xl text-black mt-4'>
            Already have an account?
          </p>
          <div 
            className='w-36 h-10 rounded-md border border-solid border-white bg-budgeter-blue color text-white text-xl cursor-pointer mt-4' 
            onClick={() => navigate('/login')}>
              <p className='text-white text-xl text-center mt-1'>
                Log In
              </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup