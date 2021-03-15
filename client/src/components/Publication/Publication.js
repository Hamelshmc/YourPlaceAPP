/* eslint-disable camelcase */
import { useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';
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

function Publication({ publication }) {
  const [user, setUser] = useContext(UserContext);
  const {
    id,
    pictures,
    publication_type,
    price,
    publicationRating,
    bathrooms,
    rooms,
    area,
    street,
    city,
    availability_date,
    id_user,
  } = publication;

  return (
    <PublicationContainer>
      <Slider slides={pictures} />
      <Favorite />
      <PublicationModule>
        <Tipo>
          {street} • {city}
        </Tipo>
        <Container>
          <Precio> {price}€</Precio>
          <LinkShowMore to={`/publication/${id}`}>Show more</LinkShowMore>
        </Container>
        <Container>
          <Ubicacion>{publication_type}</Ubicacion>
          <StartRating value={publicationRating} disabled />
        </Container>
      </PublicationModule>
      <Features>
        <Item number={bathrooms} type="bathroom" />
        <Item number={rooms} type="bedroom" />
        <Item number={area} type="area" />
        <Item number={availability_date} type="availability" />
      </Features>
      {user.id !== id_user ? <Lessor lessor={publication} /> : <></>}
    </PublicationContainer>
  );
}

export default Publication;
