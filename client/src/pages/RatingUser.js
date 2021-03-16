import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchUserRating } from '../api/User';
import FormUserRating from '../components/shared/Form/FormUserRating';
import { UserContext } from '../hooks/UserContext';

function RatingUser() {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const mutation = useMutation(async (newTodo) => await fetchUserRating(newTodo, user.token), {
    onSuccess: async (result) => {
      if (result.status === 200 || result.status === 201) {
        toast.success(`😄 ¡Rating added! 😄`);
        history.push('/profile');
      } else {
        toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
      }
    },
  });

  const onSubmit = async (data) => {
    const body = { ...data, idUserVoted: id };
    await mutation.mutateAsync(body);
  };

  return <FormUserRating handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />;
}

export default withRouter(RatingUser);
