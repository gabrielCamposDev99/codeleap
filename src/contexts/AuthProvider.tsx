import React, {
  createContext, useCallback, useContext, useMemo
} from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { UserType } from '@/validation/interfaces/ILogin';

type AuthContextProps = {
  user: UserType | null;
  login: (data: UserType) => Promise<void>;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setValue, storedValue: user } = useLocalStorage('user');
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data: UserType) => {
      setValue(data);
      navigate('private', { replace: true });
    },
    [navigate, setValue]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setValue(null);
    navigate('/', { replace: true });
  }, [navigate, setValue]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth: () => AuthContextProps = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
