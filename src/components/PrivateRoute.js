import React from 'react';
import {Routes,Route,Navigate} from "react-router"
// const isAuthenticated=true
const PrivateRoute = ({ auth: { isAuthenticated=true }, children }) => {
    // if (sessionStorage.l)
    return isAuthenticated ? children : <Navigate to="/" />;
  };

export default PrivateRoute