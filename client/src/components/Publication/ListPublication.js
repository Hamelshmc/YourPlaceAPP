import React from 'react';
import styled from 'styled-components';
import Publication from './Publication';

function ListPublication() {
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

const ListPublicationWrapper = styled.ul`
  display: grid;
  grid-row: 2;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  margin: 1rem;
  padding: 0;
  @media (min-width: 1281px) {
    justify-content: center;
    align-items: center;
    grid-gap: 1.5rem;
    margin: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
`;

export default ListPublication;
