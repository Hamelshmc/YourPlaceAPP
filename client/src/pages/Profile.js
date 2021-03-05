import React from 'react';
import Content from '../components/Profile/Content';
import Header from '../components/Profile/Header';
import ProfileContainer from '../components/Profile/styles/ProfileContainer';
import UserTabs from '../components/Profile/UserTabs';

const Profile = () => {
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
