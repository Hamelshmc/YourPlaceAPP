import React, { useContext } from 'react';
import ListPublication from '../components/Publication/ListPublication';
import { FavoriteContext } from '../hooks/FavoriteContext';

function Like() {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  return <ListPublication publications={favorite} />;
}

export default Like;
