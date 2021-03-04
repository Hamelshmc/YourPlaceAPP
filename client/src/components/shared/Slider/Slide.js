import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import styled from 'styled-components';

const cloudName = 'yourplace';

const Slide = ({ content }) => (
  <SlideImg
    cloudName={cloudName}
    loading="lazy"
    publicId={content}
    secure="true"
    dpr="auto"
    responsive
    width="auto"
    responsiveUseBreakpoints="true">
    <Transformation aspectRatio="4:3" crop="fill" />
    <Transformation quality="auto" fetchFormat="auto" crop="scale" height="400" />
  </SlideImg>
);

const SlideImg = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export default Slide;
