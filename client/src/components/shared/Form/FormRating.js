import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { fetchPublicationRating } from '../../../api/Publication';
import { UserContext } from '../../../hooks/UserContext';
import StartRating from '../StartRating';

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

const FormRatingWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem;
`;

const ButtonRating = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  min-width: 3rem;
  max-width: 6rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  background-color: #1679c5;
  color: white;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  width: 100%;
  &:hover {
    background-color: #153b5b;
    color: white;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  height: 11rem;
  width: clamp(18rem, 60%, 30rem);
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border: none;
  padding: 1rem;
  &::focus {
    outline: 1px solid tomato;
  }
`;

export default FormRating;
