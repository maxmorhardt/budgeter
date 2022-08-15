import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
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
  const [loading, setLoading] = useState(false)

  // Check if token exists and is valid
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/log-in')
    }
    axios.get(API_PATH + '/api/auth/validate-token', {
      headers: {
        Authorization: token
      }
    })
      .catch(err => {
        toast.error('Session expired', toastConfigs)
        localStorage.removeItem('token')
        navigate('/log-in')
      })
    setLoading(false)
  } , []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Home</h1>}
      <button onClick={() => {
        localStorage.removeItem('token')
        navigate('/log-in')
      } }>Log Out</button>
    </div>
  )
}

export default Home