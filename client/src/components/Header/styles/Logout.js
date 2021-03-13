import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { UserContext } from '../../../hooks/UserContext';
import LogoutButton from './LogoutButton';

const Logout = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useContext(UserContext);

  const handleLogout = (e) => {
    queryClient.invalidateQueries('userProfile', { exact: true });
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
