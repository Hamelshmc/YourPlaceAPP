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
              src={user && user.picture ? user.picture : '/assets/User.svg'}
              loading="lazy"
              alt="profile image"
              width=""
              height="100"
            />
            <Username>
              <span>
                {user && user.email
                  ? user.email.split('@')[0]
                  : 'Jhon Doe'
                  ? user && user.fullName
                  : user.fullName}
              </span>
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
