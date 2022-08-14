import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/log-in')
    }
    setLoading(false)
  } , [])

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Home</h1>}
    </div>
  )
}

export default Home