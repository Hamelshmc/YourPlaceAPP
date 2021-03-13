import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useContainerDimensions from '../../../hooks/useContainerDimensions';
import Arrow from './Arrow';
import Dots from './Dot';
import Slide from './Slide';

function Slider({ slides }) {
  const targetRef = useRef();
  const { width } = useContainerDimensions(targetRef);
  const getWidth = () => width;
  const [state, setState] = useState({
    translate: 0,
    transition: 0.3,
    activeIndex: 0,
  });
  const { translate, transition, activeIndex } = state;

  console.log(width);
  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeIndex: slides.length - 1,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  // res.cloudinary.com/yourplace/image/upload/v1614792140/YourPlace_IMG/2321321-1449034446853-66c86144b0ad_ierfjr.jpg

  const separateString = (string) => string.split(`YourPlace_IMG/`)[1];

  const cloudinaryPublicId = (arrayImages) => arrayImages.map((item) => separateString(item));
  const result = cloudinaryPublicId(slides);

  return (
    <SliderContainer ref={targetRef}>
      <SliderContent translate={translate} transition={transition}>
        {result.map((slide, index) => {
          const key = index + 1;
          return <Slide key={key} content={slide} />;
        })}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeIndex={activeIndex} />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  transition: 0.3s;
`;

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  display: flex;
  flex: 1 1 auto;
  transition: 0.3s;
`;

export default Slider;
