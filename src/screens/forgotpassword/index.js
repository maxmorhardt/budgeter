import React from 'react';
import TextInput from '../../components/TextInput';


const ForgotPassword = () => {
  return (
    <div>
      <h1 className='BudgeterText'>Budgeter</h1>
      <form className='LoginBox'>
        <TextInput type='text' placeholder='Email' />
        <button type='submit'>Submit</button>
        <div className='Line'></div>
        <div className='LoginBottomContainer'>
          <a className='ForgotPasswordText' href='/login'>Back to Log In</a>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword;