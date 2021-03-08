import React from 'react';
import Publication from './Publication';
import ListPublicationWrapper from './styles/Publication/ListPublicationWrapper';

function ListPublication({ list }) {
  return (
    <ListPublicationWrapper>
      <Publication rating="4" />
      <Publication rating="2" />
      <Publication rating="1" />
      <Publication rating="3" />
      <Publication rating="2" />
      <Publication rating="1" />
      <Publication rating="0" />
      <Publication rating="5" />
    </ListPublicationWrapper>
  );
}

export default ListPublication;
