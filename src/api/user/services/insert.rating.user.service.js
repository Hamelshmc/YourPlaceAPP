'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const notificationServices = require('../../notification/services');
const schemaValidation = require('../validations');
const typeNotifications = require('../../notification/helper/type.notification');
const userRatingRepository = require('../../../repositories/userRating.repository');

async function insertRating(ratingBody, idUser) {
  await schemaValidation.ratingValidation(ratingBody);

  const { rating, comment, idUserVoted } = ratingBody;
  const ratingEntity = {
    rating,
    comment,
    id_user_voted: idUserVoted,
    id_user_voter: idUser,
  };

  const ratingExist = await userRatingRepository.valueExists(idUser, idUserVoted);

  if (ratingExist) {
    throw new ResponseError(httpStatus.BAD_REQUEST, `It already exists`);
  }
  const notification = {
    type: typeNotifications.RATING,
    idUser,
  };

  await notificationServices.newNotification(notification);

  return await userRatingRepository.insertUserRating(ratingEntity);
}

module.exports = insertRating;
