import styled from 'styled-components';

const FooterContainer = styled.footer`
  grid-row: 3;
  bottom: 0;
  display: flex;
  position: sticky;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default FooterContainer;
