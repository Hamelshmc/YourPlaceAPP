'use strict';
const { ResponseError, httpStatus } = require('../../../helpers');
const notificationServices = require('../../notification/services');
const schemaValidation = require('../validations');
const typeNotifications = require('../../notification/helper/type.notification');
const userRatingRepository = require('../../../repositories/userRating.repository');

async function updateRating(ratingBody, idUser) {
  await schemaValidation.ratingValidation(ratingBody);
  const { rating, comment, idUserVoted } = ratingBody;
  const ratingEntity = {
    rating: rating,
    comment: comment,
    id_user_voted: idUserVoted,
  };
  const ratingExist = await userRatingRepository.valueExists(idUser, idUserVoted);

  if (ratingExist) {
    const notification = {
      type: typeNotifications.RATING,
      idUser: idUser,
    };

    await notificationServices.newNotification(notification);
    return await userRatingRepository.updateUserRating(ratingEntity, idUser);
  }

  throw new ResponseError(httpStatus.BAD_REQUEST, `it was not updated`);
}

module.exports = updateRating;
