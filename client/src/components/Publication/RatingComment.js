import React from 'react';
import styled from 'styled-components';
import StartRating from '../shared/StartRating';

function RatingComment({ publication }) {
  return (
    publication && (
      <RatingCommentWrapper>
        {publication.rating.map((item) => (
          <RatingCommentItem key={item.id}>
            <StartRating value={item.rating} />
            <RatingCommentUser>{item.fullname || item.email.split('@')[0]}</RatingCommentUser>
            <p>{item.comment}</p>
            <RatingCommentDate>{item.timestamp}</RatingCommentDate>
          </RatingCommentItem>
        ))}
      </RatingCommentWrapper>
    )
  );
}

export default RatingComment;

const RatingCommentWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  padding: 0.5rem;
`;

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

const RatingCommentDate = styled.p`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.813rem;
  color: #718096;
  font-weight: 700;
`;

const RatingCommentUser = styled.p`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
`;
