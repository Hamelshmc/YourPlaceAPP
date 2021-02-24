import styled from 'styled-components';

export const FooterContainer = styled.footer`
  grid-row: 3;
  bottom: 0;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
