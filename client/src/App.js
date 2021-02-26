import React from 'react';
import Confetti from 'react-confetti';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import Theme from './theme/Theme';
import Wrapper from './theme/Wrapper';

function App() {
  return (
    <Theme>
      <Confetti numberOfPieces={300} recycle={false} />
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/join" exact component={Join} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Wrapper>
    </Theme>
  );
}

export default App;
