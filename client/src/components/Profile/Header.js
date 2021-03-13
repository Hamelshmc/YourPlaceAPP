/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import EditButton from './styles/EditButton';
import EditProfile from './styles/EditButtonContainer';
import ProfileHeader from './styles/ProfileHeader';
import ProfileHeaderContainer from './styles/ProfileHeaderContainer';
import ProfileHeaderContent from './styles/ProfileHeaderContent';
import UserAvatar from './styles/UserAvatar';
import Username from './styles/Username';
import UserProfile from './styles/UserProfile';

const Header = ({ user }) => (
  <ProfileHeader background={user.background}>
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <UserProfile>
          <UserAvatar
            src={user && user.picture ? user.picture : '/assets/User.svg'}
            loading="lazy"
            alt="profile image"
            width=""
            height="100"
          />
          <Username>
            <span>{user && user.fullname ? user.fullname : user.email.split('@')[0]}</span>
          </Username>
        </UserProfile>
      </ProfileHeaderContent>
      <EditProfile>
        <EditButton>Edit profile</EditButton>
      </EditProfile>
    </ProfileHeaderContainer>
  </ProfileHeader>
);
export default Header;
