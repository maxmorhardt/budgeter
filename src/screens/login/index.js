import React from 'react'
import TextInput from '../../components/TextInput'
import './login.css'

const Login = () => {
  return (
    <div>
      <h1 className='BudgeterText'>Budgeter</h1>
      <form className='LoginBox'>
        <TextInput type='text' placeholder='Email' />
        <TextInput type='password' placeholder='Password' />
        <button type='submit'>Log In</button>
        <div className='Line'></div>
        <div className='LoginBottomContainer'>
          <p>Don't have an account?</p>
          <button>Sign Up</button>
        </div>
      </form>
      <div className='ForgotPasswordContainer'>
        <a className='ForgotPasswordText' href='/forgotpassword'>Forgot your password?</a>
      </div>
    </div>
  )
}

export default Login;