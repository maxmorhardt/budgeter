import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='Login'>
      <h1 className='BudgeterText'>Budgeter</h1>
      <form className='LoginBox'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit' className='LoginButton'>Login</button>
        
      </form>
    </div>
  )
}


export default Login;