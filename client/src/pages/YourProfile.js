import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchYourUser } from '../api/User';
import Content from '../components/Profile/Content';
import Header from '../components/Profile/Header';
import ProfileContainer from '../components/Profile/styles/ProfileContainer';
import UserTabs from '../components/Profile/UserTabs';
import { UserContext } from '../hooks/UserContext';

const YourProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useContext(UserContext);
  const { isError, data } = useQuery(
    ['userProfile', id, user, setUser],
    async () => await fetchYourUser(id, user.token)
  );

  if (isError) {
    toast.error('🙈 ¡Ooops! Error fetching your profile data');
  }


  return data ? (
    <ProfileContainer>
      <div>
        <Header user={data.data?.user} />
        <Content user={data.data?.user} />
      </div>

      <UserTabs
        id={data.data?.user.id}
        publicationsUser={data.data?.publicationsUser}
        publicationsHistoryUser={data.data?.publicationsHistoryUser}
        bookings={data.data?.bookings}
        requestBookings={data.data?.requestBookings}
      />
    </ProfileContainer>
  ) : (
    ''
  );
};

export default YourProfile;
