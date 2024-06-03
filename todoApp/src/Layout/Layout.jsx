import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {  Navigate, Outlet } from 'react-router-dom';
const Layout = () => {
 
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;

/*<div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
*/