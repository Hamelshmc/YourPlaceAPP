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
    () => fetchAuthData(fetchUser, user, setUser)
  );

  if (isLoading) {
    toast.info('CARGANDO...', {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <div>CARGANDO</div>;
  }

  if (isError) {
    toast.error('ERROR', {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <div>ERROR</div>;
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
