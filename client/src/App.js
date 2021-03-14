import React from 'react';
import Confetti from 'react-confetti';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Redirect, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { PrivateRoute, PublicRoute } from './components/shared/RouteFactory';
import { UserProvider } from './hooks/UserContext';
import StyledContainer from './StyledContainer';
import Wrapper from './theme/Wrapper';

const Join = React.lazy(() => import('./pages/Join'));
const Search = React.lazy(() => import('./pages/Search'));
const Messages = React.lazy(() => import('./pages/Messages'));
const Like = React.lazy(() => import('./pages/Like'));
const Notification = React.lazy(() => import('./pages/Notification'));
const Profile = React.lazy(() => import('./pages/Profile'));
const EditProfile = React.lazy(() => import('./pages/EditProfile'));
const Publication = React.lazy(() => import('./pages/Publication'));
const Verification = React.lazy(() => import('./pages/Verification'));
const EditPublication = React.lazy(() => import('./pages/EditPublication'));
const NewBooking = React.lazy(() => import('./pages/NewBooking'));
const EditBooking = React.lazy(() => import('./pages/EditBooking'));
const NewVisit = React.lazy(() => import('./pages/NewVisit'));
const NewPublication = React.lazy(() => import('./pages/NewPublication'));
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <Confetti numberOfPieces={300} recycle={false} />
      <Wrapper>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Switch>
            <PublicRoute path="/verify/:id/:code" component={Verification} exact />
            <PublicRoute path="/search" component={Search} exact />
            <PublicRoute path="/like" component={Like} exact />
            <PublicRoute path="/join" component={Join} exact />
            <PrivateRoute path="/publication/add" component={NewPublication} exact />
            <PrivateRoute path="/publication/edit/:id" component={EditPublication} exact />
            <PublicRoute path="/publication/:id" component={Publication} exact />
            <PrivateRoute path="/user/:id" component={Profile} exact />
            <PrivateRoute path="/booking/add/:id" component={NewBooking} exact />
            <PrivateRoute path="/booking/edit/:id" component={EditBooking} exact />
            <PrivateRoute path="/visit/add/:id" component={NewVisit} exact />
            <PrivateRoute path="/profile" component={Profile} exact />
            <PrivateRoute path="/profile/edit" component={EditProfile} exact />
            <PrivateRoute path="/notification" component={Notification} exact />
            <PrivateRoute path="/messages" component={Messages} exact />

            <Redirect to="/search" />
          </Switch>
          <Footer />
        </QueryClientProvider>
      </Wrapper>
      <StyledContainer />
    </UserProvider>
  );
}

export default App;
