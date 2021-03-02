import React from 'react';
import styled from 'styled-components';

function Item({ type, number }) {
  return (
    <ItemContainer>
      <ItemImg src={`/assets/post/${type}.svg`} alt="" srcSet="" />
      <p>
        <ItemNumber>{number}</ItemNumber>
        {type}
      </p>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  margin: 0.25rem 0.75rem;
  color: #4a5568;
`;

const ItemImg = styled.img`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  color: #718096;
  fill: currentColor;
  margin-right: 0.75rem;
`;

const ItemNumber = styled.span`
  color: #1a202c;
  font-weight: 700;
  margin-right: 0.25rem;
`;
export default Item;
