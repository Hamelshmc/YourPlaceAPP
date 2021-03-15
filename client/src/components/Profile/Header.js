/* eslint-disable complexity */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import { Transformation } from 'cloudinary-react';
import { useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';
import EditButton from './styles/EditButton';
import EditProfile from './styles/EditButtonContainer';
import ProfileHeader from './styles/ProfileHeader';
import ProfileHeaderContainer from './styles/ProfileHeaderContainer';
import ProfileHeaderContent from './styles/ProfileHeaderContent';
import UserAvatar from './styles/UserAvatar';
import Username from './styles/Username';
import UserProfile from './styles/UserProfile';

const cloudName = 'yourplace';

const Header = ({ user: userProp }) => {
  const [user, setUser] = useContext(UserContext);
  const { picture } = userProp;
  const data =
    userProp && userProp.picture
      ? `YourPlace_IMG/${picture.split('YourPlace_IMG/')[1]}`
      : 'avatar.svg';
  return (
    <ProfileHeader background={userProp && userProp.background}>
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
                {userProp && userProp.fullname
                  ? userProp.fullname
                  : userProp && userProp.email
                  ? userProp.email.split('@')[0]
                  : 'Jhon Doe'}
              </span>
            </Username>
          </UserProfile>
        </ProfileHeaderContent>
        <EditProfile>
          {userProp.id === user.id ? (
            <EditButton to="/profile/edit">Edit profile</EditButton>
          ) : (
            userProp.canComment && <EditButton to={`/user/score/${userProp.id}`}>Score</EditButton>
          )}
        </EditProfile>
      </ProfileHeaderContainer>
    </ProfileHeader>
  );
};
export default Header;
