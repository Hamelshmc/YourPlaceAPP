import React, { useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchAuthData, fetchUser } from '../api/User';
import Content from '../components/Profile/Content';
import Header from '../components/Profile/Header';
import ProfileContainer from '../components/Profile/styles/ProfileContainer';
import UserTabs from '../components/Profile/UserTabs';
import { UserContext } from '../hooks/UserContext';

const Profile = () => {
  // Access the client
  const queryClient = useQueryClient();

  const [user, setUser] = useContext(UserContext);

  const { isLoading, isError, error, data } = useQuery(
    ['userProfile', fetchUser, user, setUser],
    async () => await fetchAuthData(fetchUser, user, setUser)
  );

  if (isError) {
    toast.error('🙈 Ooops!');
  }

  return data ? (
    <ProfileContainer>
      <div>
        <Header user={data.data.user} />
        <Content user={data.data.user} />
      </div>
      <UserTabs
        publicationsUser={data.data.publicationsUser}
        publicationsHistoryUser={data.data.publicationsHistoryUser}
      />
    </ProfileContainer>
  ) : (
    ''
  );
};

export default Profile;
