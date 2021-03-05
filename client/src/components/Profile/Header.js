import EditButton from './styles/EditButton';
import EditProfile from './styles/EditProfile';
import ProfileHeader from './styles/ProfileHeader';
import ProfileHeaderContainer from './styles/ProfileHeaderContainer';
import ProfileHeaderContent from './styles/ProfileHeaderContent';
import UserAvatar from './styles/UserAvatar';
import Username from './styles/Username';
import UserProfile from './styles/UserProfile';

const Header = () => {
  return (
    <ProfileHeader>
      <ProfileHeaderContainer>
        <ProfileHeaderContent>
          <UserProfile>
            <UserAvatar
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              loading="lazy"
              alt="profile image"
              width=""
              height="100"
            />
            <Username>
              <span>Martin</span>
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
