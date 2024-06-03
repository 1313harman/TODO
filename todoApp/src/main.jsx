import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import Taskgenerator from './components/Taskgenerator.jsx';
import Layout from './Layout/Layout.jsx';
import Login from './components/Login.jsx';
import Signin from './components/Signin.jsx' 
import AuthProvider from './components/AuthProvider.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Login/>}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='taskgenerator' element={<Taskgenerator />}></Route>
      <Route path='Signin' element={<Signin/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the RouterProvider with UserProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
