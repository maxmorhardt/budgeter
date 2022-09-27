import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Navbar from '../../components/navbar'
import toastConfigs from '../../helpers/toastConfigs'
import { API_PATH } from '../../helpers/environ'

// Home page
const Dashboard = () => {
  const navigate = useNavigate()

  // Check if token exists and is valid
  useEffect(() => {
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
    <div>
      <Navbar />
    </div>
  )
}

export default Dashboard