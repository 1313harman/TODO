import React, { createContext, useState } from 'react';
import { userSignup, userLogin } from '../APIs';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = ({ mail, password }) => {
        const user = userLogin({ mail, password });
        if (user) {
            setUser(user);
            setError(null);
            return true;
        } else {
            setError('Email or password is incorrect');
            return false;
        }
    };

    const signup = ({ fullname, mail, password }) => {
        const isSignup = userSignup({ fullname, mail, password });
        if (isSignup) {
            setError(null);
            setUser({ fullname, mail, password }); // Set the user state after successful signup
            return true;
        } else {
            setError('Email already exists');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
