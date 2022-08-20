import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios'
import toastConfigs from '../../helpers/toastConfigs';
import { API_PATH } from '../../helpers/environ'
import FormInput from '../../components/form-input'

// Log in page
const Login = () => {
  // Hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

  // Sign in users and sends them to the home page
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      return setErrorMessage('Please fill in all fields')
    }
    setLoading(true)
    axios.post(`${API_PATH}/api/auth/login`, { email, password })
      .then(res => {
        toast.success('Logged in successfully!', toastConfigs)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('uid', res.data.uid)
        navigate('/dashboard')
      }).catch(err => {
        setErrorMessage(err.response.data.message)
      }).finally(() => {
        setLoading(false)
      })
  }

  // Render log in page
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
          value={password}
          type='password' 
          placeholder='Password' 
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        <button 
          className='w-5/6 h-10 rounded-md border border-solid border-white bg-budgeter-blue text-white text-xl cursor-pointer' 
          type='submit' 
          disabled={loading} 
          onClick={handleSubmit}>
            Log In
        </button>
        <hr className='w-11/12 h-[1.5px] bg-black mt-8' />
        <div className='flex flex-col justify-center items-center mt-5'>
          <p className='text-xl text-black mt-4'>
            Don't have an account?
          </p>
          <div 
            className='w-36 h-10 rounded-md border border-solid border-white bg-budgeter-blue cursor-pointer mt-4'  
            onClick={() => navigate('/signup')}>
              <p className='text-white text-xl text-center mt-1'>
                Sign Up
              </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login