import { joiResolver } from '@hookform/resolvers/joi';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
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
import TextBox from '../components/Chat/styles/TextBox';
import messageSchema from '../components/Chat/validation/messageSchema';
import { UserContext } from '../hooks/UserContext';

const Chat = () => {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();

  const mutation = useMutation(
    async (mutationData) => await fetchAuthDataPost(fetchPostMessage, user, setUser, mutationData),
    {
      onSuccess: async (result) => {
        console.log({ result });
        if (result.status === 200) {
          toast.success(`😄 ¡Your profile has been updated! 😄`);
          toast.info(`Remember to verify your account 👼`);
        } else {
          toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
        }
      },
    }
  );

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(messageSchema),
    mode: 'onChange',
  });

  const { isError, data } = useQuery(
    ['userMessages', fetchMessages, user, setUser, id],
    async () => await fetchAuthDataWithParam(fetchMessages, user, setUser, id),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    toast.error('🙈 ¡Ooops! Error fetching your messages ');
  }

  if (errors.message) {
    console.log({ errors });
    toast.error(` ${errors.message} 🙈 Ooops! Can you try again please? 🙈 `);
  }

  const onSubmit = async (submitData) => {
    try {
      console.log({ mutation });
      console.log('submitdata', submitData, id);
      // await mutation.mutateAsync(submitData);
    } catch (error) {
      toast.error(` ${error.message} 🙈 Ooops! Can you try again please? 🙈 `);
    }
  };

  console.log({ data });
  return (
    <ChatSection>
      <ChatBox>
        <ChatHeader>
          <ChatAvatar>
            <AvatarImg src="/assets/User.svg" alt="avatar" />
          </ChatAvatar>
          <ChatUsername>Username</ChatUsername>
        </ChatHeader>
        <ChatBody>
          <MessageList>
            {data && data.length === 0 && <Message>You have no messages with this user</Message>}
          </MessageList>
        </ChatBody>
        <MessageBox onSubmit={handleSubmit(onSubmit)}>
          <TextBox
            id="message"
            name="message"
            aria-describedby="message"
            autoComplete="off"
            ref={register}
            placeholder="Type here your message..."
            required
          />
          <SendButton
            ref={register}
            value="Send"
            id="sendMessage"
            name="sendMessage"
            type="submit"
          />
        </MessageBox>
      </ChatBox>
    </ChatSection>
  );
};

export default Chat;
