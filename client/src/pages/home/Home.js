import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Sidebar from '../../components/sidebar'
import toastConfigs from '../../helpers/toastConfigs'
import { API_PATH } from '../../helpers/environ'

// Home page
const Home = () => {

  /*
  * How to implement loading screen
  * First check to see if data has arrived
  * Render loading screen if not
  * Once useEffect has loaded data, render the page
  * (Loading state not needed anymore)
  */

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

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
        })
        .finally(() => {
          setLoading(false)
        })
    }
  } , []) // eslint-disable-line react-hooks/exhaustive-deps

  // Add the navbar to the page
  return (
    <div>
      <Sidebar />
      <div>
        <h1>container</h1>
      </div>
    </div>

  )
}

export default Home