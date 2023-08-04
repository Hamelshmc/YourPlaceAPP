import React from 'react';
import styled from 'styled-components';
import StartRating from '../shared/StartRating';

function ItemPublicationContent({ publication }) {
  return (
    <ItemPublicationWrapper>
      <ItemPublication>
        <ItemPublicationIcon src="/assets/post/area.svg" alt="icon" srcSet="" />
        {publication.area} m²
      </ItemPublication>
      <ItemPublication>
        <ItemPublicationIcon src="/assets/post/bathroom.svg" alt="icon" srcSet="" />
        {publication.bathrooms}
      </ItemPublication>
      <ItemPublication>
        <ItemPublicationIcon src="/assets/post/bedroom.svg" alt="icon" srcSet="" />
        {publication.rooms}
      </ItemPublication>
      <ItemPublication>{publication.publication_type}</ItemPublication>
      <ItemPublication>Price: {publication.price}€/mo</ItemPublication>
      <ItemPublication>Deposit: {publication.deposit}€</ItemPublication>
      <ItemPublication>
        <ItemPublicationIcon src="/assets/post/availability.svg" alt="icon" srcSet="" />
        {publication.availability_date}
      </ItemPublication>
      {publication.furnished === 1 ? <ItemPublication>Furnished</ItemPublication> : ''}
      {publication.elevator === 1 ? <ItemPublication>Elevator</ItemPublication> : ''}
      {publication.garage === 1 ? <ItemPublication>Garage</ItemPublication> : ''}
      {publication.parking === 1 ? <ItemPublication>Parking</ItemPublication> : ''}
      {publication.pets === 1 ? <ItemPublication>Pets</ItemPublication> : ''}
      {publication.garden === 1 ? <ItemPublication>Garden</ItemPublication> : ''}
      {publication.pool === 1 ? <ItemPublication>Terrace</ItemPublication> : ''}
      {publication.storage_room === 1 ? <ItemPublication>Storage Room</ItemPublication> : ''}
      {publication.heating === 1 ? <ItemPublication>Heating</ItemPublication> : ''}
      <ItemPublication>
        <StartRating value={publication.publicationRating} disabled size="1rem" />
      </ItemPublication>
    </ItemPublicationWrapper>
  );
}
export default ItemPublicationContent;

const ItemPublicationWrapper = styled.section`
  grid-row: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  padding: 0.5rem;
`;
const ItemPublication = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  min-width: 10.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  &:hover {
    border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0.4)) 1 100%;
  }
`;

const ItemPublicationIcon = styled.img`
  width: auto;
  height: 1.3rem;
  margin-right: 0.5rem;
`;
