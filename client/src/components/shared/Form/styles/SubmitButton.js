import styled from 'styled-components';

const SubmitButton = styled.button`
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
  margin: 1rem 0 2rem 0;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  width: 100%;
  transition:all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['800']};
  }
`;

export default SubmitButton;
