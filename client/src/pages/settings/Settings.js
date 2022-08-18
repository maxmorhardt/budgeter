import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Sidebar from '../../components/sidebar'
import Loading from '../../components/loading'
import toastConfigs from '../../helpers/toastConfigs'
import { API_PATH } from '../../helpers/environ'

// Settings page
const Settings = () => {
  const [loading, setLoading] = useState(true)
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
            <div className='w-box h-box flex flex-col items-left m-auto bg-white rounded-3xl shadow-box'>
              <p className='text-[40px] text-bold text-center text-black font-budgeter mt-4 pl-1'>
                Settings
              </p>
              <ul className='pt-[40px]'>
                <li className='h-16 hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2 mt-2'>
                  <span className='ml-1'>
                    Settings
                  </span>
                </li>
                <li className='h-16 hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2 mt-2'>
                  <span className='ml-1'>
                    Settings
                  </span>
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