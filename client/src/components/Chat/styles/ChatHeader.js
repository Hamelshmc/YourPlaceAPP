import styled from 'styled-components';

const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;
export default ChatHeader;
