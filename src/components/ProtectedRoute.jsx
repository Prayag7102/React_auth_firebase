import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const authToken = Cookies.get('authToken');
  
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
