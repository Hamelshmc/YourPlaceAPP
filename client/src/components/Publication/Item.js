import React from 'react';
import ItemContainer from './styles/Item/ItemContainer';
import ItemImg from './styles/Item/ItemImg';
import ItemNumber from './styles/Item/ItemNumber';

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

export default Item;
