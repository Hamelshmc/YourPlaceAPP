import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/Theme';

const Home = React.lazy(() => import('./pages/home'));
const SingIn = React.lazy(() => import('./pages/singIn'));

function App() {
  return (
    <div>
      <GlobalStyle />
      <Theme>
        <Suspense fallback>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign_in" component={SingIn} />
          </Router>
        </Suspense>
      </Theme>
    </div>
  );
}

export default App;
