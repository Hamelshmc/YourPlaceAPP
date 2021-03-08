import Icon from '../shared/Icon';
import StartRating from '../shared/StartRating';
import BioInfoContainer from './styles/BioInfoContainer';
import BioInfoItem from './styles/BioInfoItem';
import BioInfoItemEmphasized from './styles/BioInfoItemEmphasized';
import UserRating from './styles/UserRating';

const Content = ({ bio, city, country, borndate, userRating }) => {
  return (
    <BioInfoContainer>
      <BioInfoItem>{bio ? bio : ''}</BioInfoItem>
      <BioInfoItemEmphasized>
        <Icon>location_on</Icon>
        {city ? city : ''}, {country ? country : ''}
      </BioInfoItemEmphasized>
      <BioInfoItemEmphasized>
        <Icon>calendar_today</Icon>
        Borndate: {borndate ? borndate : ''}
      </BioInfoItemEmphasized>

      <UserRating>
        {userRating ? (
          <StartRating value={userRating} disabled />
        ) : (
          <StartRating value={0} disabled />
        )}
      </UserRating>
    </BioInfoContainer>
  );
};
export default Content;
