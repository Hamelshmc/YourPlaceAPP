import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../hooks/UserContext';
import SignIn from './SignIn';

const Logout = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = (e) => {
    setUser({});
  };

  return (
    <LogoutButton onClick={handleLogout} to="/logout">
      Logout
    </LogoutButton>
  );
};
const LogoutButton = styled(SignIn)`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.smaller};
`;

export default Logout;
