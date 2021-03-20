import styled from 'styled-components';

const TabMenu = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  background-color: #f0f0f0;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;

export default TabMenu;
