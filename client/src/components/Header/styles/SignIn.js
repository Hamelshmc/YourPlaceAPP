import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.default};

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

export default SignIn;