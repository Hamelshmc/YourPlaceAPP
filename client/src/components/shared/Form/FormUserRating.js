import React, { useContext } from 'react';
import StartRating from '../StartRating';
import ButtonRating from './styles/ButtonRating';
import FormRatingWrapper from './styles/FormRatingWrapper';
import Textarea from './styles/Textarea';

function FormUserRating({ handleSubmit, onSubmit, register }) {
  return (
    <section>
      <FormRatingWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>Score</h1>
        <StartRating reference={register} value={0} />
        <Textarea
          name="comment"
          id="comment"
          ref={register}
          maxLength="250"
          placeholder="Write a comment"
        />
        <ButtonRating type="submit" value="Send">
          Send
        </ButtonRating>
      </FormRatingWrapper>
    </section>
  );
}

export default FormUserRating;
