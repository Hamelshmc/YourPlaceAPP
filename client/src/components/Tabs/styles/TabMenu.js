import styled from 'styled-components';

export const TabMenu = styled.section`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  min-width: 15rem;
  background-color: #f0f0f0;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
