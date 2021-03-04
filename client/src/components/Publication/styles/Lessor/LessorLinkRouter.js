import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LessorLinkRouter = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
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
export default LessorLinkRouter;
