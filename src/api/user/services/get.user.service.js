/* eslint-disable max-lines-per-function */
const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');
const userRepository = require('../../../repositories/user.repository');

async function getUser({ id: idUser }) {
  const [user] = await userRepository.findById(idUser);

  if (user) {
    let [...publicationsUser] = await userRepository.findPublicationUser(idUser);
    let [...publicationsFavoritesUser] = await userRepository.findPublicationFavoriteUser(idUser);
    let [...publicationsHistoryUser] = await userRepository.findHistoryPublicationUser(idUser);
    const [...bookings] = await userRepository.findUserBookings(idUser);
    const [...requestBookings] = await userRepository.findUserRequestBookings(idUser);
    const [...visits] = await userRepository.findUserVisits(idUser);
    const [...requestVisits] = await userRepository.findUserRequestVisits(idUser);

    publicationsUser = await publicationsUser.map(async (publication) => {
      const pics = await publicationRepository.findAllPicturesByPublicationId(publication.id);
      const pictures = pics.map((pic) => pic.url);
      return { ...publication, pictures };
    });

    publicationsFavoritesUser = await publicationsFavoritesUser.map(async (publication) => {
      const pics = await publicationRepository.findAllPicturesByPublicationId(publication.id);
      const pictures = pics.map((pic) => pic.url);
      return { ...publication, pictures };
    });

    publicationsHistoryUser = await publicationsHistoryUser.map(async (publication) => {
      const pics = await publicationRepository.findAllPicturesByPublicationId(publication.id);
      const pictures = pics.map((pic) => pic.url);
      return { ...publication, pictures };
    });

    publicationsUser = await Promise.all(publicationsUser).then((completed) => completed);
    publicationsFavoritesUser = await Promise.all(publicationsFavoritesUser).then(
      (completed) => completed
    );
    publicationsHistoryUser = await Promise.all(publicationsHistoryUser).then(
      (completed) => completed
    );

    return {
      user,
      publicationsUser,
      publicationsFavoritesUser,
      publicationsHistoryUser,
      bookings,
      requestBookings,
      visits,
      requestVisits,
    };
  }

  throw new ResponseError(httpStatus.NOT_FOUND, 'User not found');
}

module.exports = getUser;
