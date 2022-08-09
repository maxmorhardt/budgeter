import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../../components/textinput'
import './signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <div>
      <h1 className='budgeterTextSignup'>Budgeter</h1>
      <form className='signupBox'>
        <TextInput type='text' placeholder='Email' />
        <TextInput type='password' placeholder='Password' />
        <TextInput type='password' placeholder='Confirm Password' />
        <button className='submitSignupButton' type='submit'>Sign Up</button>
        <div className='line'></div>
        <div className='signupBottomContainer'>
          <p className='alreadyHaveAccount'>Already have an account?</p>
          <button className='loginSignupScreenButton' onClick={handleLoginClick}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;