import { useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';
import IconLink from '../shared/IconLink';
import Menu from '../shared/Menu';
import MenuItem from '../shared/MenuItem';
import FooterContainer from './styles/FooterContainer';
import Nav from './styles/Nav';

function Footer() {
  const [user, setUser] = useContext(UserContext);
  return (
    <FooterContainer>
      <Nav>
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
          <MenuItem>
            <IconLink to="/join">person</IconLink>
          </MenuItem>
        </Menu>
      </Nav>
    </FooterContainer>
  );
}

export default Footer;
