import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/log-in"
import SignUp from "./pages/sign-up"
import Home from "./pages/home"

// If window isnt undefined, inject styles
if (typeof window !== 'undefined') {
  injectStyle();
}

// Render full app
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/log-in' element={<LogIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);

