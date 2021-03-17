import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchAuthData, fetchUser } from '../api/User';
import ListPublication from '../components/Publication/ListPublication';
import { FavoriteContext } from '../hooks/FavoriteContext';
import { UserContext } from '../hooks/UserContext';

function Like() {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const [user, setUser] = useContext(UserContext);
  const [favoriteUser, setFavoriteUser] = useState([]);
  const { isError, data } = useQuery(
    ['userProfile', fetchUser, user, setUser],
    async () => await fetchAuthData(fetchUser, user, setUser)
  );

  useEffect(() => {
    if (user && user.token && data && data.data.publicationsFavoritesUser) {
      setFavoriteUser(data.data?.publicationsFavoritesUser);
    } else {
      setFavoriteUser(favorite);
    }
  }, [setFavoriteUser, favorite]);

  return favorite.length ? (
    <ListPublication publications={favoriteUser} />
  ) : (
    <h2>You dont have a publications favorite...</h2>
  );
}

export default Like;
