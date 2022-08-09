import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import './login.css'

const Login = () => {
  const navigate = useNavigate()
  const handleSignUpClick = () => {
    navigate('/signup')
  }
  return (
    <div>
      <h1 className='budgeterTextLoginScreen'>Budgeter</h1>
      <form className='loginBox'>
        <TextInput type='text' placeholder='Email' />
        <TextInput type='password' placeholder='Password' />
        <button className='submitLoginButton' type='submit'>Log In</button>
        <div className='line'></div>
        <div className='loginBoxBottomContainer'>
          <p className='noAccountText'>Don't have an account?</p>
          <button className='signUpLoginScreenButton' onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </form>
      <div className='forgotPasswordLoginScreenContainer'>
        <a className='forgotPasswordLoginScreenText' href='/forgotpassword'>Forgot your password?</a>
      </div>
    </div>
  )
}

export default Login;