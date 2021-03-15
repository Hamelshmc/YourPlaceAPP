import React, { useContext } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { fetchAceptBooking } from '../../api/Booking';
import { fetchAuthDataPost } from '../../api/User';
import { fetchAceptVisit } from '../../api/Visit';
import { UserContext } from '../../hooks/UserContext';
import CardLink from './CardLink';

const AcceptButton = ({ id, booking, visit }) => {
  const [user, setUser] = useContext(UserContext);

  const mutation = useMutation(
    async (mutationData) => {
      if (mutationData.idBooking) {
        return await fetchAuthDataPost(fetchAceptBooking, user, setUser, mutationData);
      }
      if (mutationData.idVisit) {
        return await fetchAuthDataPost(fetchAceptVisit, user, setUser, mutationData);
      }
      return 'Data not valid';
    },
    {
      onSuccess: async (result) => {
        if (result.status === 200) {
          toast.success(`😄 ¡ACEPTED! 😄`);
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
    <CardLink onClick={handleClick} to={`/acept/${id}`} success>
      Accept
    </CardLink>
  );
};

export default AcceptButton;
