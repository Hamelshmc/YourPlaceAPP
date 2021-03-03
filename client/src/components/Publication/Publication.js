import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from '../shared/Slider/Slider';
import StartRating from '../shared/StartRating';
import Favorite from './Favorite';
import Item from './Item';
import Lessor from './Lessor';

const images = [
  'https://res.cloudinary.com/yourplace/image/upload/v1614792148/YourPlace_IMG/photo-1534161308652-fdfcf10f62c4_nguovq.jpg',
  'https://res.cloudinary.com/yourplace/image/upload/v1614792146/YourPlace_IMG/photo-1448630360428-65456885c650_rwoqla.jpg',
  'https://res.cloudinary.com/yourplace/image/upload/v1614792143/YourPlace_IMG/photo-1470341223622-1019832be824_vy6lr5.jpg',
  'https://res.cloudinary.com/yourplace/image/upload/v1614792140/YourPlace_IMG/photo-1449034446853-66c86144b0ad_ierfjr.jpg',
];

function Publication({ id, url, tipo, precio, ubicacion, rating }) {
  return (
    <PublicationContainer>
      <Slider slides={images} />
      <Favorite />
      <PublicationModule>
        <Tipo> Detached house • 5y old</Tipo>
        <Container>
          <Precio> $750,000 </Precio>
          <LinkShowMore to="/publication/:id">Show more</LinkShowMore>
        </Container>
        <Container>
          <Ubicacion>742 Evergreen Terrace</Ubicacion>
          <StartRating value={rating} disabled={false} />
        </Container>
      </PublicationModule>
      <Features>
        <Item number="4" type="Bathroom" />
        <Item number="1" type="Bedroom" />
        <Item number="400" type="Area" />
      </Features>
      <Lessor phoneNumber={648759635} />
    </PublicationContainer>
  );
}

const PublicationContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  background-color: #fefefe;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  position: relative;
`;

const PublicationModule = styled.section`
  padding: 1rem;
`;
const Tipo = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 700;
  color: #4a5568;
`;

const Precio = styled.p`
  font-size: 1.6rem;
  color: #1a202c;
`;

const Ubicacion = styled.p`
  color: #4a5568;
`;

const Features = styled.section`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LinkShowMore = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary['900']};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-radius: 0.2rem;
  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    color: white;
  }

  &:active {
    color: white;
  }
`;

export default Publication;
