import React, { useContext } from 'react';
import { fetchUser } from '../api/User';
import Content from '../components/Profile/Content';
import Header from '../components/Profile/Header';
import ProfileContainer from '../components/Profile/styles/ProfileContainer';
import UserTabs from '../components/Profile/UserTabs';
import { UserContext } from '../hooks/UserContext';

const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  (async () => {
    const userProfile = await fetchUser(user.token);
    console.log({ userProfile });
  })();

  return (
    <ProfileContainer>
      <div>
        <Header />
        <Content />
      </div>
      <UserTabs />
    </ProfileContainer>
  );
};

export default Profile;
