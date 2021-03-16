import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../../hooks/UserContext';
import LogoutButton from './LogoutButton';

const Logout = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const handleLogout = (e) => {
    queryClient.invalidateQueries('userProfile', { exact: true });
    setUser({});
    toast.success(`Bye bye! 😄👋👋`);
    history.push('/join');
  };

  return (
    <LogoutButton onClick={handleLogout} to="/logout">
      Logout
    </LogoutButton>
  );
};

export default withRouter(Logout);
