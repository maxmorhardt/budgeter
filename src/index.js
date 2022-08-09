import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/log-in";
import Signup from "./pages/sign-up";
import Home from "./pages/home";
import ForgotPassword from "./pages/forgot-password";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
  </BrowserRouter>
);

