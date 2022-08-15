import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_PATH } from '../../helpers/environ'

const Home = () => {
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
      .then(res => {
        console.log(res.data)
        if (res.data.isExpired) {
          localStorage.removeItem('token')
          navigate('/log-in')
        }
      })
      .catch(err => {
        localStorage.removeItem('token')
        navigate('/log-in')
      })
    setLoading(false)
  } , []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Home</h1>}
      {/* button to log out */}
      <button onClick={() => {
        localStorage.removeItem('token')
        navigate('/log-in')
      } }>Log Out</button>
    </div>
  )
}

export default Home