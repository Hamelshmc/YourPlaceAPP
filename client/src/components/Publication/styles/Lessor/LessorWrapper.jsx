import styled from 'styled-components';

const LessorWrapper = styled.section`
  display: flex;
  padding: ${({ theme }) => theme.padding[1]};
  border-top: 1px solid ${({ theme }) => theme.card.borderColor};
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.card.lessorColor};
  flex-direction: column;
`;
export default LessorWrapper;
