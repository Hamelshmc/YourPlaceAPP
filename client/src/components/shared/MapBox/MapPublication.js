import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import styled from 'styled-components';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYzRyMG50MyIsImEiOiJja2p4MnI3aGkwNGYyMm9vZmJiczRjYmZlIn0.uCBGQFsqBN_NUmh0g4vnNA';

const MapPublication = ({ latitude, longitude, className }) => {
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 16,
    });

    const location = new mapboxgl.LngLat(longitude, latitude);
    console.log(longitude, latitude);
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragPan.disable();
    map.dragRotate.disable();
    map.doubleClickZoom.disable();
    new mapboxgl.Marker({
      color: '#1679c5',
    })
      .setLngLat(location)
      .addTo(map);
    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <MapContainer className={className} id="map" />
    </div>
  );
};

export default MapPublication;

const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 350px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;

  .mapboxgl-control-container {
    display: none;
  }
  .mapboxgl-marker {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
    opacity: 1;
    transition: opacity 0.2s;
  }
  transition: 0.3s;
`;
