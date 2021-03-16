import React, { useContext } from 'react';
import ListPublication from '../components/Publication/ListPublication';
import { FavoriteContext } from '../hooks/FavoriteContext';

function Like() {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  return favorite.length ? (
    <ListPublication publications={favorite} />
  ) : (
    <h2>You dont have a publications favorite...</h2>
  );
}

export default Like;
