import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Home from "./screens/home";
import ForgotPassword from "./screens/forgotpassword";

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

