import React from 'react';
import StartRating from '../shared/StartRating';
import  RatingCommentDate  from '../shared/Rating/RatingCommentDate';
import  RatingCommentItem  from '../shared/Rating/RatingCommentItem';
import  RatingCommentUser  from '../shared/Rating/RatingCommentUser';
import  RatingCommentWrapper  from '../shared/Rating/RatingCommentWrapper';

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
