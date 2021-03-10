import React from 'react';
import Publication from './Publication';
import ListPublicationWrapper from './styles/Publication/ListPublicationWrapper';

function ListPublication({ publications }) {
  return (
    <ListPublicationWrapper>
      {publications &&
        publications.map((publication) => (
          <Publication key={publication.id} publication={publication} lessor />
        ))}
    </ListPublicationWrapper>
  );
}

export default ListPublication;
