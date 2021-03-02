import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const numberStart = 5;

function StartRating({ value, disabled }) {
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
            <Star color={ratingValue <= rating ? '#ffdf00' : '#4a5568'}>star_rate</Star>
          </label>
        );
      })}
    </div>
  );
}

const Star = styled(Icon)`
  cursor: pointer;
  transition: color 300ms;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: ${({ color }) => color};
  &:hover {
    color: '#ffdf00';
  }
`;

const InputRadio = styled.input`
  display: none;
  &:focus {
    outline: none;
  }
`;

export default StartRating;
