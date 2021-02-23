'use strict';

const visitValidator = require('../validations');
const getVisitById = require('./get.visit.by.id.service');
const visitRepository = require('../../../repositories/visit.repository');
const notificationServices = require('../../notification/services');
const typeNotifications = require('../../notification/helper/type.notification');
const { httpStatus, ResponseError } = require('../../../helpers');

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
      return await visitRepository.updateVisit(visit, id);
    }
    throw new ResponseError(httpStatus.UNAUTHORIZED, 'YOU DONT HAVE PERMISSIONS');
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'VISIT NOT FOUND');
}
module.exports = updateVisit;
