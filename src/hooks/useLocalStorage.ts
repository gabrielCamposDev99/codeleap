import { useEffect, useState } from 'react';
import { UserType } from '@/validation/interfaces/ILogin';

export const useLocalStorage = (keyName: string) => {
  const [storedValue, setStoredValue] = useState<UserType | null>(null);

  const setValue = (newValue: UserType | null) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      throw Error('Error setValue useLocalStorage');
    } finally {
      setStoredValue(newValue);
    }
  };

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        setStoredValue(JSON.parse(value));
      }
    } catch (err) {
      // Ignoramos o erro
    }
  }, [keyName]);

  return { storedValue, setValue };
};
