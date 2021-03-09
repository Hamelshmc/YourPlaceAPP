import Slider from '../shared/Slider/Slider';
import StartRating from '../shared/StartRating';
import Favorite from './Favorite';
import Item from './Item';
import Lessor from './Lessor';
import Container from './styles/Publication/Container';
import Features from './styles/Publication/Features';
import LinkShowMore from './styles/Publication/LinkShowMore';
import Precio from './styles/Publication/Precio';
import PublicationContainer from './styles/Publication/PublicationContainer';
import PublicationModule from './styles/Publication/PublicationModule';
import Tipo from './styles/Publication/Tipo';
import Ubicacion from './styles/Publication/Ubicacion';

// const images = [
//   'https://res.cloudinary.com/yourplace/image/upload/v1614792148/YourPlace_IMG/photo-1534161308652-fdfcf10f62c4_nguovq.jpg',
//   'https://res.cloudinary.com/yourplace/image/upload/v1614792146/YourPlace_IMG/photo-1448630360428-65456885c650_rwoqla.jpg',
//   'https://res.cloudinary.com/yourplace/image/upload/v1614792143/YourPlace_IMG/photo-1470341223622-1019832be824_vy6lr5.jpg',
//   'https://res.cloudinary.com/yourplace/image/upload/v1614792140/YourPlace_IMG/photo-1449034446853-66c86144b0ad_ierfjr.jpg',
// ];

function Publication({ publication, lessor = false }) {
  const {
    id,
    pictures,
    tipo,
    precio,
    rating,
    bathrooms,
    rooms,
    area,
    street,
    telephone,
    picture,
    email,
    name,
  } = publication;

  return (
    <PublicationContainer>
      <Slider slides={pictures} />
      <Favorite />
      <PublicationModule>
        <Tipo> {tipo}</Tipo>
        <Container>
          <Precio> {precio}$ </Precio>
          <LinkShowMore to={`/publication/${id}`}>Show more</LinkShowMore>
        </Container>
        <Container>
          <Ubicacion>{street}</Ubicacion>
          <StartRating value={rating} disabled={false} />
        </Container>
      </PublicationModule>
      <Features>
        <Item number={bathrooms} type="bathroom" />
        <Item number={rooms} type="bedroom" />
        <Item number={area} type="area" />
      </Features>
      {lessor.telephone && (
        <Lessor phoneNumber={telephone} url={picture} name={name} email={email} />
      )}
    </PublicationContainer>
  );
}

export default Publication;
