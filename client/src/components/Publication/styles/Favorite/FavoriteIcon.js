import styled from 'styled-components';
import Icon from '../../../shared/Icon';

const FavoriteIcon = styled(Icon)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  margin: ${({ theme }) => theme.margins[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme, favorite }) => (favorite ? theme.colors.like : '#333')};
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  cursor: pointer;
  &:hover {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.like};
  }
`;

export default FavoriteIcon;
