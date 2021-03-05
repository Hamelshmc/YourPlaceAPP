import React from 'react';
import RatingIcon from './styles/RatingIcon';
import RatingInput from './styles/RatingInput';
import RatingLabel from './styles/RatingLabel';

const Star = ({ aria, name, id, value }) => {
  return (
    <React.Fragment>
      <RatingLabel aria-label={aria} htmlFor={id}>
        <RatingIcon>star_rate</RatingIcon>
      </RatingLabel>
      <RatingInput name={name} id={id} value={value} type="radio" />
    </React.Fragment>
  );
};
export default Star;
