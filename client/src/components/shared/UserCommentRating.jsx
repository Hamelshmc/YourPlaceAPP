import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../hooks/UserContext';
import EditButton from '../Profile/styles/EditButton';
import RatingCommentDate from './Rating/RatingCommentDate';
import RatingCommentItem from './Rating/RatingCommentItem';
import RatingCommentUser from './Rating/RatingCommentUser';
import RatingCommentWrapper from './Rating/RatingCommentWrapper';
import StartRating from './StartRating';

function UserCommentRating({ item }) {
  const [user, setUser] = useContext(UserContext);
  return (
    item && (
      <RatingCommentWrapper>
        {item.map((rating) => (
          <RatingCommentItem key={rating.id}>
            <StartRating value={rating.rating} />
            <RatingCommentUser>{rating.fullname || rating.email.split('@')[0]}</RatingCommentUser>
            <p>{rating.comment}</p>
            <RatingCommentDate>{rating.timestamp}</RatingCommentDate>
            {rating.id_user_voter === user.id ? (
              <ButtonLinkEdit to={`/user/score/edit/${rating.id_user_voted}`}>
                Edit Rating
              </ButtonLinkEdit>
            ) : (
              <></>
            )}
          </RatingCommentItem>
        ))}
      </RatingCommentWrapper>
    )
  );
}

const ButtonLinkEdit = styled(EditButton)`
  margin: 1rem 0;
`;

export default UserCommentRating;
