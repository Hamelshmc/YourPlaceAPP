import styled from 'styled-components';
import SignIn from './SignIn';

const LogoutButton = styled(SignIn)`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.smaller};
`;

export default LogoutButton;
