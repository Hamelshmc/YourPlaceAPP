import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import styled from 'styled-components';

const cloudName = 'yourplace';

const Slide = ({ content }) => (
  <SlideImg
    cloudName={cloudName}
    publicId={content}
    secure="true"
    dpr="auto"
    responsive
    crop="scale"
    responsiveUseBreakpoints="true">
    <Transformation quality="auto" fetchFormat="auto" />
  </SlideImg>
);

const SlideImg = styled(Image)`
  height: 100;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export default Slide;
