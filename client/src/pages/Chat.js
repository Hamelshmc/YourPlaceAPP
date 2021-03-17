/* eslint-disable complexity */
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMessages, fetchPostMessage } from '../api/Message';
import { fetchAuthDataPost, fetchAuthDataWithParam } from '../api/User';
import AvatarImg from '../components/Chat/styles/AvatarImg';
import ChatAvatar from '../components/Chat/styles/ChatAvatar';
import ChatBody from '../components/Chat/styles/ChatBody';
import ChatBox from '../components/Chat/styles/ChatBox';
import ChatHeader from '../components/Chat/styles/ChatHeader';
import ChatSection from '../components/Chat/styles/ChatSection';
import ChatUsername from '../components/Chat/styles/ChatUsername';
import Message from '../components/Chat/styles/Message';
import MessageBox from '../components/Chat/styles/MessageBox';
import MessageList from '../components/Chat/styles/MessageList';
import SendButton from '../components/Chat/styles/SendButton';
import SendedMessage from '../components/Chat/styles/SendedMessage';
import { UserContext } from '../hooks/UserContext';

function Chat() {
  const queryClient = useQueryClient();
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const [messageControl, setMessageControl] = useState('');
  const [username, setUsername] = useState('Username');
  const [userPicture, setUserPicture] = useState('/assets/User.svg');

  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });

  const mutation = useMutation(
    async (mutationData) => await fetchAuthDataPost(fetchPostMessage, user, setUser, mutationData),
    {
      onSuccess: async (result) => {
        if (result.status === 201) {
          await queryClient.invalidateQueries('userMessages');
          toast.info(`¡Message sended!`);
        } else {
          await queryClient.invalidateQueries('userMessages');
          toast.error(`🙈 Ooops! Can you try again please? 🙈 `);
        }
      },
    }
  );

  const { isError, data } = useQuery(
    ['userMessages', fetchMessages, user, setUser, id],
    async () => await fetchAuthDataWithParam(fetchMessages, user, setUser, id),
    { refetchInterval: 1000 }
  );

  if (isError) {
    toast.error('🙈 ¡Ooops! Error fetching your messages ');
  }

  const onSubmit = async (submitData) => {
    try {
      await mutation.mutateAsync({ message: submitData.message, idUserReceiver: id });
      setMessageControl('');
    } catch (error) {
      toast.error(` 🙈 ${error.message} 🙈 `);
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data && data.data]);

  useEffect(() => {
    if (data && data.data) {
      const userData =
        data && data.data && data.data.filter((msg) => msg.id_user_sender !== user.id)[0];
      const userNName =
        userData && userData.fullname ? userData.fullname : userData && userData.email;
      setUsername(userNName);
      const userPict = userData && userData.picture;
      setUserPicture(userPict);
    }
  }, [data && data.data]);

  console.log({ data });

  return (
    <ChatSection>
      <ChatBox>
        <ChatHeader>
          <ChatAvatar>
            <AvatarImg src={userPicture && userPicture} alt="avatar" />
          </ChatAvatar>
          <ChatUsername>{username && username}</ChatUsername>
        </ChatHeader>
        <ChatBody>
          <MessageList ref={messagesEndRef}>
            {data && data.data && data.data.length === 0 && (
              <Message>You have no messages with this user</Message>
            )}
            {data && data.data && data.data.length > 0 ? (
              data.data.map((msg) =>
                msg.id_user_sender === user.id ? (
                  <SendedMessage key={msg.id_message}>
                    {msg.message} # {msg.timestamp}
                  </SendedMessage>
                ) : (
                  <Message key={msg.id_message}>
                    {msg.message} # {msg.timestamp}
                  </Message>
                )
              )
            ) : (
              <></>
            )}
          </MessageList>
        </ChatBody>
        <MessageBox onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            style={{ width: '100%' }}
            id="message"
            name="message"
            aria-describedby="message"
            autoComplete="off"
            onChange={(e) => {
              setMessageControl(e.target.value);
            }}
            value={messageControl}
            ref={register({ required: true, minLength: 1, maxLength: 180 })}
            placeholder="Type here your message..."
          />
          <SendButton type="submit" value="Send">
            Send
          </SendButton>
        </MessageBox>
      </ChatBox>
    </ChatSection>
  );
}

export default Chat;
