import styled from 'styled-components';
import IconLink from '../../shared/IconLink';

const UserAvatar = styled(IconLink)`
  width: auto;
  display: none;
  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

export default UserAvatar;
