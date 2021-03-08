import EditButton from './styles/EditButton';
import EditProfile from './styles/EditProfile';
import ProfileHeader from './styles/ProfileHeader';
import ProfileHeaderContainer from './styles/ProfileHeaderContainer';
import ProfileHeaderContent from './styles/ProfileHeaderContent';
import UserAvatar from './styles/UserAvatar';
import Username from './styles/Username';
import UserProfile from './styles/UserProfile';

const Header = ({ user }) => {
  return (
    <ProfileHeader>
      <ProfileHeaderContainer>
        <ProfileHeaderContent>
          <UserProfile>
            <UserAvatar
              src={user.picture}
              loading="lazy"
              alt="profile image"
              width=""
              height="100"
            />
            <Username>
              <span>{user.fullname}</span>
            </Username>
          </UserProfile>
        </ProfileHeaderContent>
        <EditProfile>
          <EditButton>Edit profile</EditButton>
        </EditProfile>
      </ProfileHeaderContainer>
    </ProfileHeader>
  );
};
export default Header;
