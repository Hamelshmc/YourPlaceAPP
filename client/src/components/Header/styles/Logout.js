import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../../hooks/UserContext';
import LogoutButton from './LogoutButton';

const Logout = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = (e) => {
    setUser({});
    toast.success(`Bye bye! 😄👋👋`);
  };

  return (
    <LogoutButton onClick={handleLogout} to="/logout">
      Logout
    </LogoutButton>
  );
};

export default Logout;
