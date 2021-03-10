import Icon from '../shared/Icon';
import StartRating from '../shared/StartRating';
import BioInfoContainer from './styles/BioInfoContainer';
import BioInfoItem from './styles/BioInfoItem';
import BioInfoItemEmphasized from './styles/BioInfoItemEmphasized';
import UserRating from './styles/UserRating';

const Content = ({ user }) =>
  user && (
    <BioInfoContainer>
      <BioInfoItem>{user.bio ? user.bio : ''}</BioInfoItem>
      <BioInfoItemEmphasized>
        <Icon>location_on</Icon>
        {user.city ? `  ${user.city}, ` : '  City, '} {user.country ? user.country : 'Country'}
      </BioInfoItemEmphasized>
      <BioInfoItemEmphasized>
        <Icon>calendar_today</Icon>
        {user.borndate ? user.borndate : '  1900-01-01'}
      </BioInfoItemEmphasized>

      <UserRating>
        {user.userRating ? (
          <StartRating value={user.userRating} disabled />
        ) : (
          <StartRating value={0} disabled />
        )}
      </UserRating>
    </BioInfoContainer>
  );
export default Content;
