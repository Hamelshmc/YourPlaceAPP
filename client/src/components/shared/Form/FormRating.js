import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchPublicationRating } from '../../../api/Publication';
import { UserContext } from '../../../hooks/UserContext';
import StartRating from '../StartRating';
import  ButtonRating  from './styles/ButtonRating';
import FormRatingWrapper  from './styles/FormRatingWrapper';
import Textarea  from './styles/Textarea';

function FormRating({ id }) {
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();
  const { register, handleSubmit, errors } = useForm();
  const mutation = useMutation(
    async (newTodo) => await fetchPublicationRating(newTodo, user.token, id),
    {
      onSuccess: async (result) => {
        if (result.status === 200 || result.status === 201) {
          toast.success(`😄 ¡Rating added! 😄`);
          await queryClient.refetchQueries(['publicationByID'], { active: true });
        } else {
          toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
        }
      },
    }
  );
  const onSubmit = async (data) => await mutation.mutateAsync(data);

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

export default FormRating;
