import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Theme from './theme/Theme';

const Home = React.lazy(() => import('./pages/Home'));
const SingIn = React.lazy(() => import('./pages/SingIn'));

function App() {
  return (
    <Theme>
      <Switch>
        <Route path="/sign_in" component={SingIn} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Theme>
  );
}

export default App;
