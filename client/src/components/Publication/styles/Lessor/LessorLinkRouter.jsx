import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LessorLinkRouter = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  text-align: center;
  padding: 0.5rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  border-radius: 50%;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: #fff;
    color: #0f58aa;
  }

  &:active {
    color: inherit;
  }
`;
export default LessorLinkRouter;
