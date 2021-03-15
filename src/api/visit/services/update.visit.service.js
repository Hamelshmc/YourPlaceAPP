'use strict';

const visitValidator = require('../validations');
const getVisitById = require('./get.visit.by.id.service');
const visitRepository = require('../../../repositories/visit.repository');
const notificationServices = require('../../notification/services');
const userServices = require('../../user/services');
const typeNotifications = require('../../notification/helper/type.notification');
const { httpStatus, ResponseError } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');

const { HTTP_CLIENT_NAME } = process.env;

async function updateVisit(id, visitDate, visitHour, idUser) {
  await visitValidator.validateUpdateVisit({ visitDate, visitHour });
  const foundVisit = await getVisitById(id);
  if (foundVisit) {
    if (idUser === foundVisit.id_user_visitant) {
      const visit = {
        visit_date: visitDate,
        visit_hour: visitHour,
        acepted: false,
      };

      await notificationServices.newNotification({
        type: typeNotifications.VISIT,
        idUser,
      });
      const userEmail = await publicationRepository.findPublicationOwner(foundVisit.id_publication);

      await userServices.sendConfirmationEmail(
        userEmail,
        'YourPlace visit updated',
        '¡Somebody updated a visit!',
        '¡Please anwser him as soon as posible!',
        `${HTTP_CLIENT_NAME}/`,
        '¡Go to YourPlace!'
      );
      return await visitRepository.updateVisit(visit, id);
    }
    throw new ResponseError(httpStatus.UNAUTHORIZED, 'YOU DONT HAVE PERMISSIONS');
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'VISIT NOT FOUND');
}
module.exports = updateVisit;
