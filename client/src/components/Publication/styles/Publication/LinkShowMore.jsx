import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkShowMore = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary['900']};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-radius: 0.2rem;
  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    background-color: #0f58aa;
    color: white;
  }

  &:active {
    color: white;
  }
`;

export default LinkShowMore;
