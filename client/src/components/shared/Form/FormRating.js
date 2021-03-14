import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../hooks/UserContext';
import StartRating from '../StartRating';

function FormRating() {
  const [user, setUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data, errors);
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Score</h1>
        <StartRating reference={register} value={0} />
        <textarea name="comment" id="comment" ref={register} />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </section>
  );
}

export default FormRating;
