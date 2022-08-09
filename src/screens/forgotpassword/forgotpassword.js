import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import './forgotpassword.css';


const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  }
  return (
    <div>
      <h1 className='budgeterTextForgotPassword'>Budgeter</h1>
      <form className='forgotPasswordBox'>
        <TextInput type='text' placeholder='Email' />
        <button className='submitForgotPasswordButton' type='submit'>Submit</button>
        <div className='line'></div>
        <div className='forgotPasswordBottomContainer'>
        <p className='rememberPassword'>Remember Your Password?</p>
          <button className='loginForgotPasswordScreen' onClick={handleLoginClick}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword;