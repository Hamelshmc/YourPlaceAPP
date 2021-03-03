import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const numberStart = 5;

function StartRating({ value, disabled, size }) {
  const [rating, setRating] = useState(value || null);

  const handleRating = (event) => {
    event.preventDefault();
    setRating(event.target.value);
  };

  return (
    <div>
      {[...Array(numberStart)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <InputRadio
              name="rating"
              type="radio"
              value={ratingValue}
              onClick={handleRating}
              disabled={disabled}
            />
            <Star color={ratingValue <= rating ? '#867500' : '#4a5568'} size={size}>
              star_rate
            </Star>
          </label>
        );
      })}
    </div>
  );
}

const Star = styled(Icon)`
  cursor: pointer;
  transition: color 300ms;
  font-size: ${({ size, theme }) => size || theme.fontSizes.medium};
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: ${({ color }) => color};
  &:hover {
    color: '#867500';
  }
`;

const InputRadio = styled.input`
  display: none;
  &:focus {
    outline: none;
  }
`;

export default StartRating;
