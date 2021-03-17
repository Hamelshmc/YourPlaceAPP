import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchConversations } from '../api/Message';
import { fetchAuthData } from '../api/User';
import AvatarImg from '../components/Chat/styles/AvatarImg';
import ChatAvatar from '../components/Chat/styles/ChatAvatar';
import ChatHeader from '../components/Chat/styles/ChatHeader';
import ChatSection from '../components/Chat/styles/ChatSection';
import ChatUsername from '../components/Chat/styles/ChatUsername';
import { UserContext } from '../hooks/UserContext';

function Messages() {
  const [user, setUser] = useContext(UserContext);

  const { isError, data } = useQuery(
    ['userConversations', fetchConversations, user, setUser],
    async () => await fetchAuthData(fetchConversations, user, setUser),
    { refetchInterval: 2000 }
  );

  if (isError) {
    toast.error('🙈 ¡Ooops! Error fetching your conversations data');
  }

  return data && data.status !== 200 ? (
    <ChatSection>
      <p>You dont have any conversation</p>
    </ChatSection>
  ) : (
    <ChatSection>
      {data &&
        data.data &&
        data.data.map((conversation) => (
          <Link to={`/chat/${conversation.id}`} key={conversation.id}>
            <ChatHeader>
              <ChatAvatar>
                <AvatarImg
                  src={conversation.picture ? conversation.picture : '/assets/User.svg'}
                  alt="avatar"
                />
              </ChatAvatar>
              <ChatUsername>
                {conversation.fullname
                  ? conversation.fullname
                  : conversation.email
                  ? conversation.email
                  : 'User'}
              </ChatUsername>
            </ChatHeader>
          </Link>
        ))}
    </ChatSection>
  );
}

export default Messages;
