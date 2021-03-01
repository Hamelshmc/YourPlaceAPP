import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

function IconLink({ to, children, className }) {
  return (
    <StyledLink
      to={to}
      className={className}
      activeStyle={{
        color: '#1679c5',
      }}>
      <StyledIcon>{children}</StyledIcon>
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
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
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

const StyledIcon = styled(Icon)`
  letter-spacing: 0.06rem;
`;

export default IconLink;
