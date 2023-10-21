import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthProvider';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
