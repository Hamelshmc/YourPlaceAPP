import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

function IconLink({ to, children, className }) {
  return (
    <StyledLink to={to} className={className}>
      <StyledIcon>{children}</StyledIcon>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  text-decoration: none;
  text-shadow: $box-shadow-card;
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

  &--active {
    color: $color-03;
    text-shadow: $box-shadow-05;
  }
`;

export default IconLink;
