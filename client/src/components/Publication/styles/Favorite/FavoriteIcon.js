import styled from 'styled-components';
import Icon from '../../../shared/Icon';

const FavoriteIcon = styled(Icon)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  margin: ${({ theme }) => theme.margins[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.like};
  text-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export default FavoriteIcon;
