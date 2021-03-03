import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const [user, setUser] = useContext(UserContext);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) => (user && restricted ? <Redirect to="/join" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
