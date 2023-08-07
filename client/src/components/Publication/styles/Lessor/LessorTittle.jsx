import styled from 'styled-components';

const LessorTittle = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.smaller};
  color: ${({ theme }) => theme.fontColor.alternative};
  font-weight: 700;
`;

export default LessorTittle;
