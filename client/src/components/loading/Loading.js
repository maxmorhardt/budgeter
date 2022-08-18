import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'


const Loading = () => {
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img 
        src={require('../../assets/budgeter-192x192.png')} 
        className='w-32 h-32 mb-14'
      />
      <SyncLoader color='#3d5f82'/>
    </div>
  )
}

export default Loading