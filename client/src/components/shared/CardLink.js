import styled from 'styled-components';
import LinkShowMore from '../Publication/styles/Publication/LinkShowMore';

const CardLink = styled(LinkShowMore)`
  margin: 0.2rem;
  background: #1679c5;
  background: ${({ success, error }) => (success ? '#26aa5e' : error ? '#e74c3c' : '#1679c5')};
`;

export default CardLink;
