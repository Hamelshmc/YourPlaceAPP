import styled from 'styled-components';

export const InputLabel = styled.label`
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  padding: 0 0.5rem;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  transition: 0.3s;
`;
