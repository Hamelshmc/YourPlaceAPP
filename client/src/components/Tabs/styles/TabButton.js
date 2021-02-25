import styled from 'styled-components';

export const TabButton = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;

  &.focus {
    border-bottom: 2px solid #007bef;
  }

  &:hover {
    border-bottom: 2px solid #007bef;
  }
`;
