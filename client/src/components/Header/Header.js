import { useContext } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../hooks/UserContext';
import IconLink from '../shared/IconLink';
import Menu from '../shared/Menu';
import MenuItem from '../shared/MenuItem';
import Header from './styles/Header';
import HeaderContainer from './styles/HeaderContainer';
import HeaderIcon from './styles/HeaderIcon';
import HeaderNavBar from './styles/HeaderNavBar';
import HeaderTitle from './styles/HeaderTitle';
import Logout from './styles/Logout';
import SignIn from './styles/SignIn';
import Title from './styles/Title';
import UserAvatar from './styles/UserAvatar';

function HeaderNav() {
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();
  return (
    <HeaderContainer>
      <Header>
        <HeaderTitle>
          <HeaderIcon to="/">home</HeaderIcon>
          <Title>Your Space</Title>
        </HeaderTitle>
        <HeaderNavBar>
          <Menu>
            <MenuItem>
              <IconLink to="/search">search</IconLink>
            </MenuItem>
            <MenuItem>
              <IconLink to="/like">favorite</IconLink>
            </MenuItem>
            {user.token && (
              <MenuItem>
                <IconLink to="/publication/add">add_box</IconLink>
              </MenuItem>
            )}
          </Menu>
        </HeaderNavBar>
        {user.token && (
          <div>
            <Menu>
              <MenuItem>
                <IconLink to="/messages">email</IconLink>
              </MenuItem>
              <MenuItem>
                <IconLink to="/notification">notifications</IconLink>
              </MenuItem>
            </Menu>
          </div>
        )}
        {user.token ? (
          <UserAvatar to="/profile">person</UserAvatar>
        ) : (
          <SignIn to="/join">Sign In</SignIn>
        )}
        {location.pathname === '/profile' && <Logout to="/logout">Logout</Logout>}
      </Header>
    </HeaderContainer>
  );
}

export default HeaderNav;
