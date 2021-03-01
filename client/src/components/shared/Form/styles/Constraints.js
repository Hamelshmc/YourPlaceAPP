import styled from 'styled-components';

export const Constraints = styled.div`
  margin: 0.1px 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.error};
`;
