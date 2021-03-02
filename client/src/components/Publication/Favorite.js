import React from 'react';
import styled from 'styled-components';
import Icon from '../shared/Icon';

function Favorite({ id }) {
  return <FavoriteIcon>favorite</FavoriteIcon>;
}

const FavoriteIcon = styled(Icon)`
  position: absolute;
  right: 0;
  margin: 0.5rem;
  font-size: 1.8rem;
  color: #e0245d;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export default Favorite;
