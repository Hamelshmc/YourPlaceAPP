import styled from 'styled-components';

const Nav = styled.nav`
  box-shadow: ${({ theme }) => theme.boxShadow.footer};
  backdrop-filter: blur(25px);
  display: flex;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
`;

export default Nav;
