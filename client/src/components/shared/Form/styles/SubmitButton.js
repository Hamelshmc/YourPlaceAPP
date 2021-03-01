import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.default};
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary[50]};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.default};
  /* fallback */
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: 500;
  margin: 3rem 0 0 0;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  &:hover {
    background-color: ${({ theme }) => theme.fontSizes.default};
    color: black;
  }
`;
