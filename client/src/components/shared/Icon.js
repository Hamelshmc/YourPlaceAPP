import styled from 'styled-components';

function Icon({ children, className }) {
  return <Span className={`${className} material-icons-round`}>{children}</Span>;
}

const Span = styled.span`
  font-size: 1.4rem;
`;

export default Icon;
