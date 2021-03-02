import React from 'react';
import styled from 'styled-components';

const Dots = ({ slides, activeIndex }) => (
  <DostsContainer>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
    <Number>1/{slides.length}</Number>
  </DostsContainer>
);

const Number = styled.span`
  position: absolute;
  bottom: 0;
  right: 1rem;
  color: white;
  letter-spacing: 0.25rem;
`;

const DostsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span`
  padding: 0.3rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#212121' : 'white')};
`;

export default Dots;
