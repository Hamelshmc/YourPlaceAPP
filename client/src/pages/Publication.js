/* eslint-disable complexity */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPublicationById } from '../api/Publication';
import ItemPublicationContent from '../components/DetailsPublication/ItemPublication';
import MapPublication from '../components/shared/MapBox/MapPublication';
import Slider from '../components/shared/Slider/Slider';

function Publication() {
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
      </SliderWrapper>
      {data && <ItemPublicationContent publication={publication} />}
      <MapContent>
        <MapPublication latitude={publication.latitude} longitude={publication.longitude} />
      </MapContent>
    </PublicationSection>
  );
}

const PublicationSection = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;

const SliderWrapper = styled.section`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const MapContent = styled.div`
  padding: 1rem;
  position: relative;
`;

export default Publication;
