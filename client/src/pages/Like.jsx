import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { fetchAuthData, fetchUser } from '../api/User';
import ListPublication from '../components/Publication/ListPublication';
import { FavoriteContext } from '../hooks/FavoriteContext';
import { UserContext } from '../hooks/UserContext';

function Like() {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();
  const [favoriteUser, setFavoriteUser] = useState([]);
  const { isError, data } = useQuery(
    ['userFavorite', fetchUser, user, setUser],
    async () => await fetchAuthData(fetchUser, user, setUser)
  );

  useEffect(() => {
    if (user && user.token && data && data.data.publicationsFavoritesUser) {
      setFavorite(data.data?.publicationsFavoritesUser);
    }
  }, [data]);

  return favorite.length ? (
    <ListPublication publications={favorite} />
  ) : (
    <h2>You dont have a publications favorite...</h2>
  );
}

export default Like;
