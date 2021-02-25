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
  &:focus {
    background: none;
    border: 0.15rem solid ${({ theme }) => theme.colors.primary.default};
  }
  &:focus + label {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.default};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  &:not(:focus):invalid {
    color: red;
    outline-color: red;
  }
`;
