import styled from 'styled-components';

const RatingCommentItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0.2rem;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  min-width: 10.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  &:hover {
    border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0.4)) 1 100%;
  }
`;
export default RatingCommentItem;
