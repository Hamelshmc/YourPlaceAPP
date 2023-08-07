/* eslint-disable camelcase */
/* eslint-disable complexity */
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPublicationById } from '../api/Publication';
import ItemPublicationContent from '../components/DetailsPublication/ItemPublication';
import Favorite from '../components/Publication/Favorite';
import Lessor from '../components/Publication/Lessor';
import RatingComment from '../components/Publication/RatingComment';
import FormRating from '../components/shared/Form/FormRating';
import MapPublication from '../components/shared/MapBox/MapPublication';
import Slider from '../components/shared/Slider/Slider';
import { UserContext } from '../hooks/UserContext';

function Publication() {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    ['publicationByID', id],
    async () => fetchPublicationById(id),
    {
      refetchOnWindowFocus: false,
    }
  );

  const publication = data && data.data;
  console.log(publication);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <PublicationSection>
      <SliderWrapper>
        <Slider slides={data && publication.pictures} />
        <Favorite />
      </SliderWrapper>
      {data && <ItemPublicationContent publication={publication} />}
      <MapContent>
        <p>
          {publication.street} • {publication.city}
        </p>
        <MapPublication latitude={publication.latitude} longitude={publication.longitude} />
      </MapContent>
      <PublicationLessorWrapper>
        {user.id !== publication.id_user ? <Lessor lessor={publication} /> : <></>}
      </PublicationLessorWrapper>
      {user.id !== publication.id_user && publication.success ? <FormRating id={id} /> : <></>}
      <ButtonContent>
        {user.id !== publication.id_user && !publication.success ? (
          <ButtonLink to={`/visit/add/${id}`}>¡I want to visit it!</ButtonLink>
        ) : (
          <></>
        )}
        {user.id !== publication.id_user && !publication.success ? (
          <ButtonLink to={`/booking/add/${id}`}>¡Book it!</ButtonLink>
        ) : (
          <></>
        )}
        {user.id === publication.id_user ? (
          <ButtonLink to={`/publication/edit/${id}`}>Edit publication</ButtonLink>
        ) : (
          <></>
        )}
      </ButtonContent>
      {publication.rating && <RatingComment publication={publication} />}
    </PublicationSection>
  );
}

const ButtonContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  min-width: 6rem;
  max-width: 11rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  background-color: #1679c5;
  color: white;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  width: 100%;
  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    background-color: #153b5b;
    color: white;
  }
  &:active {
    color: white;
  }
`;

const PublicationSection = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  @media (min-width: 1281px) {
    & {
      grid-column: col-start 4 / span 6;
    }
  }
`;

const SliderWrapper = styled.section`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  transition: 0.3s;
  @media (min-width: 1281px) {
    & {
      margin: 0 auto;
      width: clamp(28rem, 60%, 38rem);
    }
  }
`;

const MapContent = styled.div`
  padding: 1rem;
  position: relative;
`;

const PublicationLessorWrapper = styled.div`
  padding: 1rem;
  display: grid;
  place-items: center;
  section {
    box-shadow: ${({ theme }) => theme.boxShadow.default};
    border-width: 0.2rem;
    border-style: solid;
    border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  }
  @media (min-width: 1281px) {
    section {
      max-width: 70%;
    }
  }
`;

export default Publication;
