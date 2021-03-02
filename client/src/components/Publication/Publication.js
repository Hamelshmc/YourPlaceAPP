import styled from 'styled-components';
import Slider from '../shared/Slider/Slider';
import StartRating from '../shared/StartRating';
import Favorite from './Favorite';
import Item from './Item';
import Lessor from './Lessor';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

function Publication({ id, url, tipo, precio, ubicacion, rating }) {
  return (
    <PublicationContainer>
      <Slider slides={images} />
      <Favorite />
      <PublicationModule>
        <Tipo> Detached house • 5y old</Tipo>
        <Precio> $750,000 </Precio>

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
      <Lessor />
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

const PublicationImg = styled.div`
  display: flex;
  flex: 1 1 auto;
  img {
    flex: 1 1 auto;
    object-fit: cover;
    object-position: center;
  }
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
  flex-wrap: nowrap;
`;

export default Publication;
