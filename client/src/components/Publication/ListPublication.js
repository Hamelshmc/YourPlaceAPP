import React, { useContext } from 'react';
import { FavoriteContext } from '../../hooks/FavoriteContext';
import Publication from './Publication';
import ListPublicationWrapper from './styles/Publication/ListPublicationWrapper';

function ListPublication({ publications   }) {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  return (
    <ListPublicationWrapper>
      {publications &&
        publications.map((publication) => (
          <Publication
            key={publication.id}
            publication={publication}
            newData={setFavorite}
            data={favorite}
          />
        ))}
    </ListPublicationWrapper>
  );
}

export default ListPublication;
