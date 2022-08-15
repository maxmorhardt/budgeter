import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  // create a sidebar that can be opened and closed
  // use the toggleSidebar function to open and close the sidebar
  // have the name Budgeter at the top
  // have options to view the dashboard, monthly, weekly, daily, add an expense and log out
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Budgeter</h3>
      </div>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <h4>Dashboard</h4>
          <i className="fas fa-home"></i>
        </div>
        <div className="sidebar-option">
          <h4>Monthly</h4>
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="sidebar-option">
          <h4>Weekly</h4>
          <i className="fas fa-calendar-week"></i>
        </div>
        <div className="sidebar-option">
          <h4>Daily</h4>
          <i className="fas fa-calendar-day"></i>
        </div>
        <div className="sidebar-option">
          <h4>Add Expense</h4>
          <i className="fas fa-plus"></i>
        </div>
        <div className="sidebar-option">
          <h4>Log Out</h4>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar