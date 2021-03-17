import styled from 'styled-components';

const Message = styled.div`
  clear: both;
  float: left;
  padding: 0.5rem 1rem 0.5rem;
  border-radius: 0.2rem 0.2rem 0.2rem 1rem;
  margin: 1rem 1rem;
  font-size: 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  position: relative;
  background-color: #f2b4c7;
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-bottom: 2rem;
  }
  z-index: 10;
  span {
    font-size: 0.813rem;
    color: #4d4d4d;
  }
`;

export default Message;
