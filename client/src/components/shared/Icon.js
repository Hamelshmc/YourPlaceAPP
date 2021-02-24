import styled from 'styled-components';

function Icon({ children }) {
  return <Span className="material-icons-round">{children}</Span>;
}

const Span = styled.span`
  font-size: 1.4rem;
`;

export default Icon;
