import React from 'react';
import TextInput from '../../components/TextInput'
import './signup.css'

const Signup = () => {
  return (
    <div>
      <h1 className='BudgeterText'>Budgeter</h1>
      <form className='SignupBox'>
        <TextInput type='text' placeholder='Email' />
        <TextInput type='password' placeholder='Password' />
        <TextInput type='password' placeholder='Confirm Password' />
        <button className='SignUpButton' type='submit'>Sign Up</button>
        <div className='Line'></div>
        <div className='SignupBottomContainer'>
          <p>Already have an account?</p>
          <button>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;