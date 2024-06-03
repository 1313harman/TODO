import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

function Signin() {
  const [fullname, setFullname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const {error,signup} = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()
    if(!signup({fullname,mail,password}))
    {
      return true
    }
    else
    {
       navigate('/')
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-center bg-gray-800 text-white text-center mb-2 text-xl font-bold animate-bounce">
          <h1>Sign In</h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname" className="block text-white text-center mb-2">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              name="fullname"
              id="fullname"
              className="block w-full bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              placeholder="Enter your Full Name"
              aria-label="Full Name"
            />

            <label htmlFor="mail" className="block text-white text-center mb-2">Email Id</label>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="mail"
              id="mail"
              className="block w-full bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              placeholder="Enter your Email ID"
              aria-label="Email ID"
            />

            <label htmlFor="password" className="block text-white text-center mb-2">Passkey</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              maxLength="4"
              className="block w-full bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              placeholder="Enter your passkey"
              aria-label="Passkey"
            />
            {error && <p className="text-red">{error}</p>}
            <button
              type="submit"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
            >
              Submit
            </button>
            <center><Link to='/' className="font-center text-white">Already Have an Account?</Link></center>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
