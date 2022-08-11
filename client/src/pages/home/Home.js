import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/log-in')
  } , [])

  return (
    <div>
      <h1>Home Page TBD</h1>
    </div>
  )
}

export default Home