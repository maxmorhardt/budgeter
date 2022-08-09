import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form-input';
import './ForgotPassword.css';


const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleLogInClick = () => {
    navigate('/log-in');
  }
  return (
    <div>
      <h1 className='budgeter-text-forgot-password'>Budgeter</h1>
      <form className='forgot-password-box'>
        <FormInput type='text' placeholder='Email' />
        <button className='submit-forgot-password-button' type='submit'>Submit</button>
        <div className='line'></div>
        <div className='forgot-password-bottom-container'>
        <p className='remember-password'>Remember Your Password?</p>
          <button className='log-in-forgot-password-page-button' onClick={handleLogInClick}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword;