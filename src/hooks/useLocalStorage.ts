import { useState } from 'react';
import { UserType } from '@/validation/interfaces/ILogin';

export const useLocalStorage = (
  keyName: string,
  defaultValue: UserType | null
) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: UserType) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      throw Error('Error setValue useLocalStorage');
    } finally {
      setStoredValue(newValue);
    }
  };
  return [storedValue, setValue];
};
