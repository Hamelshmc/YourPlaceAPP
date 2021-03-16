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
import { UserContext } from '../hooks/UserContext';

function Chat() {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });
  console.log(errors);
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

  const onSubmit = async (submitData) => {
    console.log('sadsad');
    try {
      console.log('submitdata', submitData, id);
      // await mutation.mutateAsync(submitData);
    } catch (error) {
      toast.error(` ${error.message} 🙈 Ooops! Can you try again please? 🙈 `);
    }
  };

  if (errors.message) {
    console.log({ errors });
    toast.error(` ${errors.message} 🙈 Ooops! Can you try again please? 🙈 `);
  }

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
