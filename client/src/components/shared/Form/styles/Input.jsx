import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.default};
  border: 0.1rem solid
    ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.primary.default)};
  border-radius: 0.5rem;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow.default};

  &:focus {
    background: none;
    border: 0.16rem solid
      ${({ focus, theme }) => (focus ? theme.colors.alert : theme.colors.success)};
  }

  &:focus + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.alert : theme.colors.success)};
  }

  & + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.primary.default)};
  }

  &:not(:placeholder-shown):not(:focus) {
    border: 0.16rem solid
      ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.success)};
  }

  &:not(:placeholder-shown):not(:focus) + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.success)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.emphasis};
    font-size: ${({ theme }) => theme.fontSizes.smaller};
  }

  &[type='number'] {
    position: relative;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: inner-spin-button;
    width: 1.2rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;

export default Input;
