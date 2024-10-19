// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, emailVerified, children }) => {
  return isAuthenticated && emailVerified ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;