import React from 'react';
import Confetti from 'react-confetti';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Redirect, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { PrivateRoute, PublicRoute } from './components/shared/RouteFactory';
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
const Verification = React.lazy(() => import('./pages/Verification'));

const NewPublication = React.lazy(() => import('./pages/NewPublication'));
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
            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path="/verify/:id/:code" component={Verification} exact />
            <PublicRoute path="/search" component={Search} exact />
            <PublicRoute path="/publication" component={Publication} exact />
            <PublicRoute path="/like" component={Like} exact />
            <PublicRoute path="/join" component={Join} exact />

            <PrivateRoute path="/profile" component={Profile} exact />
            <PrivateRoute path="/notification" component={Notification} exact />
            <PrivateRoute path="/publication/add" component={NewPublication} exact />
            <PrivateRoute path="/publication/:id" component={Publication} exact />
            <PrivateRoute path="/profile" component={Profile} exact />
            <PrivateRoute path="/notification" component={Notification} exact />
            <PrivateRoute path="/messages" component={Messages} exact />

            <Redirect to="/" />
          </Switch>
        </QueryClientProvider>
        <Footer />
      </Wrapper>
    </UserProvider>
  );
}

export default App;
