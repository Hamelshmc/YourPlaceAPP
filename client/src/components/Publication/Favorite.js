import React from 'react';
import FavoriteIcon from './styles/Favorite/FavoriteIcon';

function Favorite({ handleOnclick, favorite }) {
  return (
    <FavoriteIcon onClick={handleOnclick} favorite={favorite}>
      favorite
    </FavoriteIcon>
  );
}

export default Favorite;
