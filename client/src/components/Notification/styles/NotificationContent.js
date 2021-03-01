import styled from 'styled-components';

const NotificationContent = ({ acepted, children }) => (
  <Content acepted={acepted}>{children}</Content>
);
const Content = styled.div`
  overflow: hidden;
  min-height: 6rem;
  max-height: 8rem;
  border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  position: relative;
  border-left: 0.5rem solid ${({ acepted }) => (acepted ? 'greenyellow' : 'red')};
`;

export default NotificationContent;
