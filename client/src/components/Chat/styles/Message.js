import styled from 'styled-components';

const Message = styled.div`
  clear: both;
  float: left;
  padding: 0.5rem 1rem 0.5rem;
  border-radius: 0 0 0 1rem;
  background: $color-10;
  margin: 1rem 1rem;
  font-size: 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  position: relative;
  &:last-child {
    margin-bottom: 2rem;
  }
`;

export default Message;
