import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

// // LOGIN STATUS
// const isLogin = () => {
//   const user = localStorage.getItem('user');
//   return !!user.token;
// };

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => (user.token ? <Component {...props} /> : <Redirect to="/join" />)}
    />
  );
};

export { PrivateRoute, PublicRoute };
