import styled from 'styled-components';

export const NotificationContent = ({ acepted, children }) => {
  return <Content acepted={acepted}>{children}</Content>;
};
const Content = styled.div`
  overflow: hidden;
  min-height: 6rem;
  max-height: 8rem;
  border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  border-left: 0.5rem solid ${({ acepted }) => (acepted ? 'greenyellow' : 'red')};
`;
