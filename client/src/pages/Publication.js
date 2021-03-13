/* eslint-disable camelcase */
/* eslint-disable complexity */
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPublicationById } from '../api/Publication';
import ItemPublicationContent from '../components/DetailsPublication/ItemPublication';
import Favorite from '../components/Publication/Favorite';
import Lessor from '../components/Publication/Lessor';
import MapPublication from '../components/shared/MapBox/MapPublication';
import Slider from '../components/shared/Slider/Slider';
import { UserContext } from '../hooks/UserContext';

function Publication() {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(['publicationByID', id], async () =>
    fetchPublicationById(id)
  );

  const publication = data && data.data;

  console.log('[DATA]', publication);
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
        <MapPublication latitude={publication.latitude} longitude={publication.longitude} />
      </MapContent>
      {user.id !== publication.id_user ? <Lessor lessor={publication} /> : <></>}
    </PublicationSection>
  );
}

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
      width: clamp(30rem, 60%, 40rem);
    }
  }
`;

const MapContent = styled.div`
  padding: 1rem;
  position: relative;
`;

export default Publication;
