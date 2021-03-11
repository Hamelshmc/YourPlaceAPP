import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTitle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding: 1.1rem 1.1rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  @media (min-width: 768px) {
    padding: 1.1rem 4.2rem;
  }
  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;
export default HeaderTitle;
