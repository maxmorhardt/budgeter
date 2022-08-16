import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login"
import Signup from "./pages/signup"
import Home from "./pages/home"
import './index.css'

// Adds styles to the toast notifications
if (typeof window !== 'undefined') {
  injectStyle();
}

// Render full app
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);

