import Icon from '../shared/Icon';
import Star from './Star';
import BioInfoContainer from './styles/BioInfoContainer';
import BioInfoItem from './styles/BioInfoItem';
import BioInfoItemEmphasized from './styles/BioInfoItemEmphasized';
import InputHidden from './styles/InputHidden';
import Rating from './styles/Rating';
import RatingGroup from './styles/RatingGroup';
import UserRating from './styles/UserRating';

const Content = () => {
  return (
    <BioInfoContainer>
      <BioInfoItem>
        sum dolor sit amet consectetur adipisicing elit.Cupiditate quia placeat repellendus magnam,
        ad libero!Iusto aliquam eius beat
      </BioInfoItem>
      <BioInfoItemEmphasized>
        <Icon>location_on</Icon>A Coruña, Galicia
      </BioInfoItemEmphasized>
      <BioInfoItemEmphasized>
        <Icon>calendar_today</Icon>
        Borndate: 16 de Agosto de 1995
      </BioInfoItemEmphasized>

      <UserRating>
        <Rating id="full-stars-example-two">
          <RatingGroup>
            <InputHidden disabled checked name="rating3" id="rating3-none" value="0" type="radio" />
            <Star aria={'1 star'} name={'rating3'} id={'rating3-1'} value={'1'} />
            <Star aria={'2 star'} name={'rating3'} id={'rating3-2'} value={'2'} />
            <Star aria={'3 star'} name={'rating3'} id={'rating3-3'} value={'3'} />
            <Star aria={'4 star'} name={'rating3'} id={'rating3-4'} value={'4'} />
            <Star aria={'5 star'} name={'rating3'} id={'rating3-5'} value={'5'} />
          </RatingGroup>
        </Rating>
      </UserRating>
    </BioInfoContainer>
  );
};
export default Content;
