import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-row: 1;
  @media (min-width: 1281px) {
    grid-column: col-start 3 / span 8;
  }
`;

export default HeaderContainer;
