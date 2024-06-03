import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Login() {
    const [fullname, setFullname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const { error, login } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (login({ mail, password })) {
            navigate('/Home');
        }
    }

    return (
        <>
            <div>
                <div className="flex justify-center bg-gray-800 text-white text-center mb-2 text-xl font-bold animate-bounce">
                    <h1>Log In</h1>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <label htmlFor="fullname" className="block text-white text-center mb-2">Full name</label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        name="fullname"
                        id="fullname"
                        className="block w-full bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="Enter your full name"
                    />
                    
                    <label htmlFor="mail" className="block text-white text-center mb-2">Email Id</label>
                    <input
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        name="mail"
                        id="mail"
                        className="block w-full bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="Enter your Email Id"
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
                    />
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <button
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <center><Link to='Signin' className="text-white">Not have an account!</Link></center>
                </div>
            </div>
        </>
    );
}

export default Login;
