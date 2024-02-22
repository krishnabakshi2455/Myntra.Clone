import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import "./header.css"
import "./header,mobile.css"
import LoginForm from './LoginForm';
import "./LoginForm.css"
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter } from "react-router-dom";
// {/* <Routes>
//   <Route path="/" /> {/* Renders at /app/ */}
// </Routes> */}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Header/>
  // </React.StrictMode>
      <>
  <BrowserRouter>
    <LoginForm/>
  </BrowserRouter>
  
  </>
);


