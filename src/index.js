import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import ForgotPassword from "./pages/forgot-password";
import { UserAuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/log-in' element={<LogIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
);

