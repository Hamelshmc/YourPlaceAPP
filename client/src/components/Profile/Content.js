import Icon from '../shared/Icon';
import StartRating from '../shared/StartRating';
import BioInfoContainer from './styles/BioInfoContainer';
import BioInfoItem from './styles/BioInfoItem';
import BioInfoItemEmphasized from './styles/BioInfoItemEmphasized';
import UserRating from './styles/UserRating';

const Content = ({ user }) => (
  <BioInfoContainer>
    <BioInfoItem>{user ? user.bio : ''}</BioInfoItem>
    <BioInfoItemEmphasized>
      <Icon>location_on</Icon>
      {user ? `${user.city}, ` : ''} {user ? user.country : 'España'}
    </BioInfoItemEmphasized>
    <BioInfoItemEmphasized>
      <Icon>calendar_today</Icon>
      {user ? user.borndate : ''}
    </BioInfoItemEmphasized>

    <UserRating>
      {user ? <StartRating value={user.userRating} disabled /> : <StartRating value={0} disabled />}
    </UserRating>
  </BioInfoContainer>
);
export default Content;
