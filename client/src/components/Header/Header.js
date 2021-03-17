import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../hooks/UserContext';
import Icon from '../shared/Icon';
import IconLink from '../shared/IconLink';
import IconSvg from '../shared/IconSvg/IconSVG';
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
        <HeaderTitle to="/">
          <HeaderIcon>
            <IconLogo svg="logo" />
          </HeaderIcon>

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
                <StyledLink
                  to="/notification"
                  activeStyle={{
                    color: '#1679c5',
                  }}>
                  <StyledIcon>notifications</StyledIcon>
                  <CountNotification>5</CountNotification>
                </StyledLink>
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

const IconLogo = styled(IconSvg)`
  width: auto;
  height: 1.2rem;
`;

const CountNotification = styled.p`
  position: absolute;
  top: 0.5rem;
  right: 0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.813rem;
  color: white;
  background-color: red;
  border-radius: 50%;
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  width: 100%;
  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #1679c5;
  }

  &:active {
    color: inherit;
  }
`;

const StyledIcon = styled(Icon)`
  letter-spacing: 0.06rem;
`;

export default HeaderNav;
