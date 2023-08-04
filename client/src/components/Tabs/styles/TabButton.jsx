import styled from 'styled-components';

const TabButton = styled.button`
  position: sticky;
  cursor: pointer;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;
  color: inherit;
  outline: none;
  transition: 0.3s all ease-out;

  &.focus {
    border-bottom: 2px solid #007bef;
  }

  &:hover {
    border-bottom: 2px solid #007bef;
  }
`;

export default TabButton;
