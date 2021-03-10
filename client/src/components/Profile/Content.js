import Icon from '../shared/Icon';
import StartRating from '../shared/StartRating';
import BioInfoContainer from './styles/BioInfoContainer';
import BioInfoItem from './styles/BioInfoItem';
import BioInfoItemEmphasized from './styles/BioInfoItemEmphasized';
import UserRating from './styles/UserRating';

const Content = ({ user }) => {
  return (
    <BioInfoContainer>
      <BioInfoItem>{user && user.bio ? user.bio : 'Type your bio here ! ⌨ ⌨ '}</BioInfoItem>
      <BioInfoItemEmphasized>
        <Icon>location_on</Icon>
        {user && user.city ? ` ${user.city}, ` : ' City, '}{' '}
        {user && user.country ? user.country : 'Country'}
      </BioInfoItemEmphasized>
      <BioInfoItemEmphasized>
        <Icon>calendar_today</Icon>
        {user && user.borndate ? user.borndate : 'Borndate'}
      </BioInfoItemEmphasized>
      <UserRating>
        {user && user.userRating ? (
          <StartRating value={user.userRating} disabled />
        ) : (
          <StartRating value={0} disabled />
        )}
      </UserRating>
    </BioInfoContainer>
  );
};
export default Content;
