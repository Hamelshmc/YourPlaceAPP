import styled from 'styled-components';
import IconLink from '../../shared/IconLink';

const Avatar = styled(IconLink)`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    width: auto;
  }
`;

export default Avatar;
