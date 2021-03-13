import styled from 'styled-components';
import Icon from '../../shared/Icon';

const HeaderIcon = styled(Icon)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  margin-left: 0.5rem;
  padding: 0;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  width: auto;
`;
export default HeaderIcon;
