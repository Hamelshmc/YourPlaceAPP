import styled from 'styled-components';

const SendButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.primary[50]};
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1;
  padding: 0.5rem 1rem;
  outline: none;
  transition: background 300ms ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primary[900]};
  }
`;

export default SendButton;
