import { useContext, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { fetchPublicationFavorite, fetchPublicationFavoriteDelete } from '../../api/Publication';
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

function Publication({ publication, newData, data }) {
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();
  const [favorite, setFavorite] = useState(false);
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

  const mutation = useMutation(
    async (newTodo) => await fetchPublicationFavorite(newTodo, user.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userFavorite');
        queryClient.refetchQueries('userFavorite');
      },
    }
  );

  const mutationDelete = useMutation(
    async (newTodo) => await fetchPublicationFavoriteDelete(newTodo, user.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userFavorite');
        queryClient.refetchQueries('userFavorite');
      },
    }
  );

  const handleOnclick = async (event) => {
    event.preventDefault();
    if (data.length === 0) {
      newData([publication]);
      setFavorite(true);
      if (user && user.token) {
        await mutation.mutateAsync({ id_publication: id });
      }
    }
    if (data.every((item) => item.id !== publication.id)) {
      newData([...data, publication]);
      setFavorite(true);
      if (user && user.token) {
        await mutation.mutateAsync({ id_publication: id });
      }
    } else {
      const result = data.filter((item) => item.id !== publication.id);
      newData([...result]);
      setFavorite(false);
      if (user && user.token) {
        await mutationDelete.mutateAsync({ id_publication: id });
      }
    }
  };

  useEffect(() => {
    if (data && data.find((item) => item.id === id)) {
      return setFavorite(true);
    }
    return setFavorite(false);
  }, []);

  return (
    <PublicationContainer>
      <Slider slides={pictures} />
      {user.id !== id_user ? <Favorite handleOnclick={handleOnclick} favorite={favorite} /> : <></>}
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
