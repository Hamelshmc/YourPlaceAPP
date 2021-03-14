/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import { Transformation } from 'cloudinary-react';
import EditButton from './styles/EditButton';
import EditProfile from './styles/EditButtonContainer';
import ProfileHeader from './styles/ProfileHeader';
import ProfileHeaderContainer from './styles/ProfileHeaderContainer';
import ProfileHeaderContent from './styles/ProfileHeaderContent';
import UserAvatar from './styles/UserAvatar';
import Username from './styles/Username';
import UserProfile from './styles/UserProfile';

const cloudName = 'yourplace';

const Header = ({ user }) => {
  const { picture } = user;
  const data =
    user && user.picture ? `YourPlace_IMG/${picture.split('YourPlace_IMG/')[1]}` : 'avatar.svg';
  console.log(data);
  return (
    <ProfileHeader background={user && user.background}>
      <ProfileHeaderContainer>
        <ProfileHeaderContent>
          <UserProfile>
            <UserAvatar
              cloudName={cloudName}
              loading="lazy"
              publicId={data}
              secure="true"
              dpr="auto"
              responsive
              width="auto"
              responsiveUseBreakpoints="true">
              <Transformation width="150" height="150" gravity="face" radius="max" crop="fill" />
            </UserAvatar>
            <Username>
              <span>
                {user && user.fullname
                  ? user.fullname
                  : user && user.email
                  ? user.email.split('@')[0]
                  : 'Jhon Doe'}
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
