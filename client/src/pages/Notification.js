import React, { useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { fetchDeleteUserNotification, fetchUserNotifications } from '../api/Notification';
import { fetchAuthData, fetchAuthDataWithParam } from '../api/User';
import { UserContext } from '../hooks/UserContext';

function Notification() {
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();

  const { isError, data } = useQuery(
    ['userNotifications', fetchUserNotifications, user, setUser],
    async () => await fetchAuthData(fetchUserNotifications, user, setUser),
    {
      refetchOnWindowFocus: false,
      cacheTime: 3000,
    }
  );

  const mutation = useMutation(
    async (mutationData) =>
      await fetchAuthDataWithParam(fetchDeleteUserNotification, user, setUser, mutationData),
    {
      onSuccess: async (result) => {
        if (result.status === 200) {
          toast.success(`¡Notification deleted! 😄`);
          await queryClient.invalidateQueries('userNotifications');
          await queryClient.refetchQueries('userNotifications');
        } else {
          toast.error(`🙈  ${result.data}  🙈 `);
          await queryClient.invalidateQueries('userNotifications');
          await queryClient.refetchQueries('userNotifications');
        }
      },
    }
  );

  const handleNotificationClick = async (event) => {
    const idNotification = event.target.id;
    console.log({ idNotification });
    try {
      await mutation.mutateAsync(idNotification);
    } catch (error) {
      console.error('MUTATION ERROR');
    }
  };

  const checkNotificationType = (notification) => {
    let title = '';
    let time = '';
    let body = '';
    let url = '';
    if (notification.notification_type === 'PAYMENT') {
      title = '¡Check your payments!';
      time = notification.timestamp;
      body = '¡Please go now to your profile and check your booking payments!';
      url = '/profile';
    }
    if (notification.notification_type === 'BOOKING') {
      title = '¡Check your bookings!';
      time = notification.timestamp;
      body = '¡Please go now to your profile, try to anwser soon as posible to other users!';
      url = '/profile';
    }
    if (notification.notification_type === 'RATING') {
      title = '¡Check your ratings!';
      time = notification.timestamp;
      body = '¡Please go now to your profile, other user rated you!';
      url = '/profile';
    }
    if (notification.notification_type === 'VISIT') {
      title = '¡Check your visits!';
      time = notification.timestamp;
      body = '¡Please go now to your profile, try to anwser soon as posible to other users!';
      url = '/profile';
    }
    if (notification.notification_type === 'MESSAGE') {
      title = '¡Check your messages!';
      time = notification.timestamp;
      body = '¡Please go now to your messages, try to anwser soon as posible to other users!';
      url = '/message';
    }
    return (
      <NotificationContainer id={notification.id} key={notification.id}>
        <NotificationBox id={notification.id} onClick={handleNotificationClick}>
          <NotificationHeader id={notification.id}>
            <NotificationTitle id={notification.id}>{title}</NotificationTitle>
            <NotificationTime id={notification.id}>{time}</NotificationTime>
          </NotificationHeader>
          <NotificationContent id={notification.id}>
            <NotificationBody id={notification.id}>{body}</NotificationBody>
          </NotificationContent>
        </NotificationBox>
      </NotificationContainer>
    );
  };

  console.log({ data });
  return (
    <NotificationSection>
      {data && data.data && data.data.map((msg) => checkNotificationType(msg))}
    </NotificationSection>
  );
}

export default Notification;

const NotificationSection = styled.div`
  grid-row: 2;
`;

const NotificationContainer = styled.div`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const NotificationBox = styled.div`
  overflow: hidden;
  min-height: 6rem;
  max-height: 8rem;
  border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  position: relative;
`;

const NotificationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  font-size: 12px;
  text-transform: uppercase;
`;

const NotificationTitle = styled.h2`
  font-weight: 600;
`;

const NotificationTime = styled.span`
  text-transform: lowercase;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
`;

const NotificationContent = styled.div`
  line-height: 1.4;
`;

const NotificationBody = styled.span``;

const NotificationDefaultText = styled.span``;
