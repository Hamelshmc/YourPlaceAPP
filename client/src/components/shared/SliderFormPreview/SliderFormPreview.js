import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useContainerDimensions from '../../../hooks/useContainerDimensions';
import Arrow from '../Slider/Arrow';
import Dots from '../Slider/Dot';

function SliderFormPreview({ slides }) {
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

  return (
    <SliderContainer ref={targetRef}>
      <SliderContent translate={translate} transition={transition}>
        {slides &&
          slides.map((slide, index) => {
            const key = index + 1;
            return <img src={slide.base64} alt="" key={key} />;
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

export default SliderFormPreview;
