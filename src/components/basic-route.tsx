import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthProvider';

type BasicRouteProps = {
  children: React.ReactNode;
};

export const BasicRoute = ({ children }: BasicRouteProps) => {
  const { user } = useAuth();

  if (user?.username) {
    return <Navigate to="/private" />;
  }
  return children;
};
