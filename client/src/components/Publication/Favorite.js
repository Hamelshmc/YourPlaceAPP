import React from 'react';
import styled from 'styled-components';
import Icon from '../shared/Icon';

function Favorite({ id }) {
  return <FavoriteIcon>favorite</FavoriteIcon>;
}

const FavoriteIcon = styled(Icon)`
  position: absolute;
  right: 0;
  margin: ${({ theme }) => theme.margins[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.like};
  text-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export default Favorite;
