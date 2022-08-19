import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import Loading from '../../components/loading'

// Settings page
const Settings = () => {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  // Shows loading screen just to show off
  useEffect(() => {
    // DEV TESTING WITH LOADING SCREEN
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  } , [])

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-[6]'>
        {loading ? <Loading /> : 
          <div className='flex flex-col justify-center h-screen'>
            <div className='w-[28em] h-96 flex flex-col items-left m-auto bg-white rounded-3xl shadow-box'>
              <p className='text-[34px] text-bold text-center text-black font-budgeter mt-4 pl-1'>
                Settings
              </p>
              <hr className='bg-black h-[1.5px] solid mt-3' />
              <ul className=''>
                <li className='h-16 hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2'>
                  <p className='ml-1 pt-[18px]'>
                    Email: {email}
                  </p>
                </li>
                <li className='h-16 hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2'>
                  <p className='ml-1 pt-[18px]'>
                    Change Password
                  </p>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Settings