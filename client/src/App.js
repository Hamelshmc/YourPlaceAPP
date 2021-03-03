import React from 'react';
import Confetti from 'react-confetti';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Redirect, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PublicRoute from './components/shared/PublicRoute';
import { UserProvider } from './hooks/UserContext';
import Wrapper from './theme/Wrapper';

const Home = React.lazy(() => import('./pages/Home'));
const Join = React.lazy(() => import('./pages/Join'));
const Search = React.lazy(() => import('./pages/Search'));
const Messages = React.lazy(() => import('./pages/Messages'));
const Like = React.lazy(() => import('./pages/Like'));
const Notification = React.lazy(() => import('./pages/Notification'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Publication = React.lazy(() => import('./pages/Publication'));

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <Confetti numberOfPieces={300} recycle={false} />
      <Wrapper>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Switch>
            <PublicRoute path="/publication" restricted={false} component={Publication} exact />
            <PublicRoute path="/profile" restricted={true} component={Profile} exact />
            <PublicRoute path="/notification" restricted={true} component={Notification} exact />
            <PublicRoute path="/like" restricted={false} component={Like} exact />
            <PublicRoute path="/messages" restricted={true} component={Messages} exact />
            <PublicRoute path="/search" restricted={false} component={Search} exact />
            <PublicRoute path="/join" restricted={false} component={Join} exact />
            <PublicRoute path="/" restricted={false} component={Home} exact />
            <Redirect to="/" />
          </Switch>
        </QueryClientProvider>
        <Footer />
      </Wrapper>
    </UserProvider>
  );
}

export default App;
