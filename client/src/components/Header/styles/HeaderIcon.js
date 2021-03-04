import styled from 'styled-components';
import IconLink from '../../shared/IconLink';

const HeaderIcon = styled(IconLink)`
  font-size: 1rem;
  letter-spacing: 0.2rem;
  margin-left: 0.5rem;
  padding: 0;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  width: auto;
`;
export default HeaderIcon;
