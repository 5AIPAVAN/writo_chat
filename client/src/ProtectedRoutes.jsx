import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ redirectPath = '/email' }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
