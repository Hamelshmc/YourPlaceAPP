import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.default};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary.default};
  border-radius: 0.5rem;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  &:focus {
    background: none;
    border: 0.15rem solid ${({ theme }) => theme.colors.primary.default};
  }
  &:focus + label {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.emphasis};
    font-size: ${({ theme }) => theme.fontSizes.smaller};
  }
`;
