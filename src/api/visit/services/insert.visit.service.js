'use strict';

const { idChecker, tableNames, httpStatus, ResponseError } = require('../../../helpers');
const notificationServices = require('../../notification/services');
const publicationRepository = require('../../../repositories/publication.repository');
const typeNotifications = require('../../notification/helper/type.notification');
const visitRepository = require('../../../repositories/visit.repository');
const visitValidator = require('../validations');

async function insertVisit(visitDate, visitHour, idPublication, idUser) {
  if (idPublication) {
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
      console.log({ visit });
      await visitValidator.validateInsertVisit(visit);

      await notificationServices.newNotification({
        type: typeNotifications.VISIT,
        idUser: idUser,
      });
      return await visitRepository.insertVisit(visit);
    }

    throw new ResponseError(httpStatus.NOT_FOUND, 'Not Found Publication');
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'Not valid id Publication');
}

module.exports = insertVisit;
