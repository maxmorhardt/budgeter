import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import toastConfigs from '../../helpers/toastConfigs'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp'
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp'

const Sidebar = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogout = () => {
    toast.success('Logged out successfully!', toastConfigs)
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='h-[100vh] flex-1 bg-white pt-8 shadow-2xl min-w-[175px] rounded-lg'>
      <div className='h-12 flex items-center justify-center'>
        <span className='font-budgeter text-3xl font-bold text-budgeter-blue text-center'>
          Budgeter
        </span>
      </div>
      <div>
        <ul>
          <p className='text-xs text-bold text-[#999] mt-4 pl-1'>
            Main
          </p>
          <li 
            className='hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2 mt-2'
            onClick={() => navigate('/dashboard')}
          >
            <GridViewSharpIcon />
            <span className='ml-1'>
              Dashboard
            </span>
          </li>
          <p className='text-xs text-bold text-[#999] mt-4 pl-1'>
            Profile
          </p>
          <li 
            className='hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2 mt-2'
            onClick={() => navigate('/settings')}
          >
            <SettingsApplicationsSharpIcon />
            <span className='ml-1'>
              Settings
            </span>
          </li>
          <li 
            className='hover:bg-[#e6e6e6] active:bg-[#ccc] cursor-pointer pl-2 mt-2'
            onClick={handleLogout}
          >
            <LogoutSharpIcon />
            <span className='ml-1'>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar