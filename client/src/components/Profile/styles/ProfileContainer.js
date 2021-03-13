import styled from 'styled-components';

const ProfileContainer = styled.section`
  grid-row: 2;
  @media (min-width: 1281px) {
    & {
      grid-column: col-start 2 / span 10;
    }
  }
`;

export default ProfileContainer;
