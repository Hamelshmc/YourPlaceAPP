import React, { useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchDenyBooking } from '../../api/Booking';
import { fetchAuthDataPost } from '../../api/User';
import { fetchDenyVisit } from '../../api/Visit';
import { UserContext } from '../../hooks/UserContext';
import CardLink from './CardLink';

const DenyButton = ({ id, booking, visit }) => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const mutation = useMutation(
    async (mutationData) => {
      if (mutationData.idBooking) {
        return await fetchAuthDataPost(fetchDenyBooking, user, setUser, mutationData);
      }
      if (mutationData.idVisit) {
        return await fetchAuthDataPost(fetchDenyVisit, user, setUser, mutationData);
      }
      return 'Data not valid';
    },
    {
      onSuccess: async (result) => {
        if (result.status === 200) {
          toast.success(`😄 ¡DENIED! 😄`);
          history.push('/profile');
        } else {
          toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
        }
      },
    }
  );

  const handleClick = async (e) => {
    try {
      if (booking) {
        await mutation.mutateAsync({ idBooking: id });
      } else if (visit) {
        await mutation.mutateAsync({ idVisit: id });
      }
    } catch (mutationEerror) {
      toast.error(` ${mutationEerror.message} 🙈 ¡Ooops! ¿Can you try again please? 🙈 `);
    }
  };
  return (
    <CardLink onClick={handleClick} to={`/deny/${id}`} error>
      Deny
    </CardLink>
  );
};

export default withRouter(DenyButton);
