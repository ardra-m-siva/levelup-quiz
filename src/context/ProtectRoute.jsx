import React, { createContext } from 'react'
import { Navigate } from 'react-router-dom';
const ProtectRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return (
        { children }
    )
}

export default ProtectRoute