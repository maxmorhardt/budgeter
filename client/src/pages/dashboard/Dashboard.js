import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Sidebar from '../../components/sidebar'
import Loading from '../../components/loading'
import toastConfigs from '../../helpers/toastConfigs'
import { API_PATH } from '../../helpers/environ'

// Home page
const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Check if token exists and is valid
  useEffect(() => {
    // DEV TESTING WITH LOADING SCREEN
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    } else {
      axios.get(API_PATH + '/api/auth/validate-token', {
        headers: {
          Authorization: token
        }
      })
        .catch(err => {
          toast.error('Session expired', toastConfigs)
          localStorage.removeItem('token')
          navigate('/login')
        }).finally(() => {
          // Set this when data needs to be fetched
          //setLoading(false)
        })
    }
  } , []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-[6]'>
        {loading ? <Loading /> : 
          <h1>container</h1>
        }
      </div>
    </div>
  )
}

export default Dashboard