import React from 'react';
import { Redirect } from 'react-router-dom';
import StartRating from '../StartRating';
import ButtonRating from './styles/ButtonRating';
import FormRatingWrapper from './styles/FormRatingWrapper';
import Textarea from './styles/Textarea';

function FormUserRating({ handleSubmit, onSubmit, register, mutation }) {
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
          {mutation.isLoading ? 'Doing interesting things...' : 'Send'}
          {mutation.isError && 'An error occurred'}
          {mutation.isSuccess && <Redirect to="/" />}
        </ButtonRating>
      </FormRatingWrapper>
    </section>
  );
}

export default FormUserRating;
