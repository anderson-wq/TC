import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the path to your AuthContext

interface ProtectedRouteProps {
  children: ReactNode;

  requiredRole?: 'admin' | 'superadmin'; // Optional: Define the role if you want to restrict access based on roles
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const context = useContext(AuthContext); // Access the AuthContext
  if (!context) {
    // Handle the case where the context is not available
    return <Navigate to="/login" replace />;
  }

  const { user, loading, role } = context; // Destructure from the context

  // While loading, show a loading indicator or spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a requiredRole is provided and the user's role does not match, redirect to home or another page
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated and has the required role (if any), render the children
  return children;
};

export default ProtectedRoute;
