import React, {
  createContext, useCallback, useContext, useMemo
} from 'react';
import { redirect } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { UserType } from '@/validation/interfaces/ILogin';

type AuthContextProps = {
  user: unknown;
  login: (data: UserType) => Promise<void>;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage('user', null);

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data: UserType) => {
      setUser(data);
      redirect('/profile');
    },
    [setUser]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setUser(null);
    redirect('/');
  }, [setUser]);

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
