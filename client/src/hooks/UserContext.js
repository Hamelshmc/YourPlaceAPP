import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', {});
  console.log('[userLocal]', user);
  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
