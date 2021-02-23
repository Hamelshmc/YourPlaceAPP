import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Theme from './theme/Theme';
import Wrapper from './theme/Wrapper';

const Home = React.lazy(() => import('./pages/Home'));
const SingIn = React.lazy(() => import('./pages/SingIn'));

function App() {
  return (
    <Theme>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/sign_in" component={SingIn} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Wrapper>
    </Theme>
  );
}

export default App;
