import React from 'react';
import styled from 'styled-components';
import leftArrow from './arrow/left.svg';
import rightArrow from './arrow/right.svg';

const Arrow = ({ direction, handleClick }) => (
  <ArrowDirection onClick={handleClick} direction={direction}>
    {direction === 'right' ? (
      <img src={rightArrow} alt="rightArrow" />
    ) : (
      <img src={leftArrow} alt="leftArrow" />
    )}
  </ArrowDirection>
);

const ArrowDirection = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  ${({ direction }) => (direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 2rem;
  justify-content: center;
  position: absolute;
  top: 45%;
  transition: transform ease-in 0.1s;
  width: 2rem;
  filter: ${({ theme }) => `drop-shadow(${theme.boxShadow.default})`};
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: ${({ direction }) =>
      direction === 'left' ? `translateX(-1rem)` : `translateX(1rem)`};
    &:focus {
      outline: 0;
    }
  }
`;

export default Arrow;
