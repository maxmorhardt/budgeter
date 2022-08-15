import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/log-in' element={<LogIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
  </BrowserRouter>
);

