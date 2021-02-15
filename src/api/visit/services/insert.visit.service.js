'use strict';

const { idChecker, tableNames, httpStatus, ResponseError } = require('../../../helpers');
const notificationServices = require('../../notification/services');
const publicationRepository = require('../../../repositories/publication.repository');
const typeNotifications = require('../../notification/helper/type.notification');
const visitRepository = require('../../../repositories/visit.repository');
const visitValidator = require('../validations');
const { id } = require('date-fns/locale');

async function insertVisit({ visitDate, visitHour, idPublication }, idUser) {
  await visitValidator.validateInsertVisit({ visitDate, visitHour, idPublication });
  const haveVisit = await visitRepository.haveVisit(idUser, idPublication);
  if (!haveVisit) {
    const publication = await publicationRepository.existsPublication(idPublication);
    if (publication) {
      const visitId = await idChecker(tableNames.VISIT);
      const visit = {
        id: visitId,
        visit_date: visitDate,
        visit_hour: visitHour,
        id_publication: idPublication,
        id_user_visitant: idUser,
      };
      await notificationServices.newNotification({
        type: typeNotifications.VISIT,
        idUser: idUser,
      });
      return await visitRepository.insertVisit(visit);
    }
    throw new ResponseError(httpStatus.NOT_FOUND, 'PUBLICATION NOT FOUND');
  }
  throw new ResponseError(httpStatus.CONFLICT, 'YOU CANT ADD MORE VISITS TO THIS RESERVATION');
}

module.exports = insertVisit;
