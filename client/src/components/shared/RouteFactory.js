import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/join" />)}
    />
  );
};

// LOGIN STATUS
const isLogin = () => {
  const data = localStorage.getItem('user');
  const user = JSON.parse(data);
  return user && !!user.token;
};

export { PrivateRoute, PublicRoute, isLogin };
