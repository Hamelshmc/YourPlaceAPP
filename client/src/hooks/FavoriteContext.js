import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useLocalStorage('favorite', []);
  return (
    <FavoriteContext.Provider value={[favorite, setFavorite]}>{children}</FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
