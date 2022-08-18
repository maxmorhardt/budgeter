import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login"
import Signup from "./pages/signup"
import Dashboard from "./pages/dashboard"
import Settings from "./pages/settings"
import './index.css'

// Adds styles to the toast notifications
if (typeof window !== 'undefined') {
  injectStyle();
}

// Render full app
/**
 * TODO:
 * - Add 404 page
 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);

