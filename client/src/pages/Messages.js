import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchConversations } from '../api/Message';
import { fetchAuthData } from '../api/User';
import { UserContext } from '../hooks/UserContext';

function Messages() {
  const [user, setUser] = useContext(UserContext);

  const { isError, data } = useQuery(
    ['userProfile', fetchConversations, user, setUser],
    async () => await fetchAuthData(fetchConversations, user, setUser)
  );

  if (isError) {
    toast.error('🙈 ¡Ooops! Error fetching your conversations data');
  }

  console.log({ data });

  return data && data.status !== 200 ? (
    <p>You dont have any conversation</p>
  ) : (
    <div>{data && data.data}</div>
  );
}

export default Messages;
