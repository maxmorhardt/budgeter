import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import toastConfigs from '../../helpers/toastConfigs'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.success('Logged out', toastConfigs)
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between w-[100%] h-14 bg-black'>
      <img className='w-10 h-10 ml-3' src={require('../../assets/budgeter-192x192.png')} alt='Budgeter logo' />
      <div className=''>
        <button className='text-white text-lg mr-3'>Dashboard</button>
        <button className='text-white text-lg'>Add Expense</button>
      </div>
      <div>
        <button 
          className='text-white text-lg cursor-pointer mr-3' 
          onClick={handleLogout}>
            Log Out
        </button>
      </div>
    </div>
  )
}

export default Navbar