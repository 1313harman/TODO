import React, { useContext, useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { AuthContext } from './AuthProvider';
import Login from "./Login";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const[isAuthenticate,setAuthenticate]=useState(false)
  const { logout } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleOff = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if(location.pathname === '/' || location.pathname === '/Signin')
  {
    return null
  }
  
  return (
    <>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
            {/* Menu Button */}
            <button className="text-white" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {/* Sidebar */}
            {isOpen && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
                <div className="absolute top-0 left-0 h-full bg-white w-64 shadow-lg">
                  <ul className="p-4">
                    <li>
                      <button onClick={toggleOff} className="text-gray-800 hover:text-black">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="home"
                        onClick={toggleSidebar}
                        className="flex items-center text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-black transition duration-300 font-bold"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l7 7 7-7M5 7l7-7 7 7"></path>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="taskgenerator"
                        onClick={toggleSidebar}
                        className="block text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-black transition duration-300"
                      >
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={toggleSidebar}
                        className="block text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-black transition duration-300"
                      >
                        LogIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Myworks"
                        onClick={toggleSidebar}
                        className="block text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-black transition duration-300"
                      >
                      My Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Signin"
                        onClick={toggleSidebar}
                        className="block text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-black transition duration-300"
                      >
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* Create Button */}
            <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full">
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 5a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V6h-2a1 1 0 01-1-1z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a1 1 0 10-2 0v10H4V4h5a1 1 0 100-2H4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Create
            </button>
          </div>
          {/* Search Input */}
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white px-4 py-1 w-3/6 rounded-full focus:outline-none"
            />
          </div>
          {/* Profile and Info */}
          <div className="flex items-center space-x-4">
            <LuLogOut />
            <button onClick={handleLogout}>Log out</button>
            <div className="flex items-center bg-teal-500 text-white px-3 py-1 rounded-full">
              <span className="mr-1">HS</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
