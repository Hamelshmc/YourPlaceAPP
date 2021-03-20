import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  text-decoration: none;
  color: white !important;
  background-color: ${({ theme }) => theme.colors.primary['600']};
  align-self: stretch !important;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.default};
  @media (min-width: 768px) {
    align-self: flex-start;
  }

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['800']};
  }

  &:active {
    color: inherit;
  }
`;

export default SignIn;
