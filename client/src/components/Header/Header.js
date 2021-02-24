import styled from 'styled-components';
import IconLink from '../shared/IconLink';
import Menu from '../shared/Menu';
import MenuItem from '../shared/MenuItem';
import Header from './styles/Header';
import HeaderContainer from './styles/HeaderContainer';
import HeaderIcon from './styles/HeaderIcon';
import HeaderNavBar from './styles/HeaderNavBar';
import HeaderTitle from './styles/HeaderTitle';
import Title from './styles/Title';

function HeaderNav() {
  return (
    <HeaderContainer>
      <Header>
        <HeaderTitle>
          <HeaderIcon>home</HeaderIcon>
          <Title>Your Space</Title>
        </HeaderTitle>
        <HeaderNavBar>
          <Menu>
            <MenuItem>
              <IconLink to="./search.html">search</IconLink>
            </MenuItem>
            <MenuItem>
              <IconLink to="./like.html">favorite</IconLink>
            </MenuItem>
            <MenuItem>
              <IconLink to="./add-post.html">add_box</IconLink>
            </MenuItem>
          </Menu>
        </HeaderNavBar>
        <div>
          <Menu>
            <MenuItem>
              <IconLink to="./message.html">email</IconLink>
            </MenuItem>
            <MenuItem>
              <IconLink to="./notifications.html">notifications</IconLink>
            </MenuItem>
          </Menu>
        </div>
        <Menu>
          <MenuItem>
            <Avatar to="./user-profile.html">person</Avatar>
          </MenuItem>
        </Menu>
      </Header>
    </HeaderContainer>
  );
}

const Avatar = styled(IconLink)`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;

export default HeaderNav;
