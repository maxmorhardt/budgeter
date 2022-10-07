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
    <>
      <Navbar />
      <VerticalContainer />
    </>
  )
}

/**
 * Right now is the container for the expenses
 * Could be component with data prop
 */
const VerticalContainer = () => {
  return (
    <>
      <div className='min-h-[93vh] w-box m-auto bg-white shadow-box'>
        <Expenses />
      </div>
    </>
  )
}

/**
 * Scrollable:
    * Amount spent on left
    * Datetime on right
 * Total amount on bottom
 */
const Expenses = () => {
  return (
    <>
      <div className='flex my-auto items-center justify-between w-[100%] h-14'>
        <p>Amount</p>
        <p>Datetime</p>
      </div>
      <hr className='h-[1.5px] bg-black'/>
    </>
  )
}

export default Dashboard