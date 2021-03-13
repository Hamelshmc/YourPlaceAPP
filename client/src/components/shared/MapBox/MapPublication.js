import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYzRyMG50MyIsImEiOiJja2p4MnI3aGkwNGYyMm9vZmJiczRjYmZlIn0.uCBGQFsqBN_NUmh0g4vnNA';

const MapPublication = ({ latitude, longitude, className }) => {
  const mapContainerRef = useRef(null);
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
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
      <MapContainer className={className} id="map" ref={mapContainerRef} />
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
