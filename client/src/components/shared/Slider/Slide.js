import React from 'react';
import styled from 'styled-components';

const Slide = ({ content }) => <SlideImg src={content} />;

const SlideImg = styled.img`
  height: 100;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export default Slide;
