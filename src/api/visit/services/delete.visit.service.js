'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const visitRepository = require('../../../repositories/visit.repository');
const getVisitById = require('./get.visit.by.id.service');

async function deleteVisit(idVisit, idUser) {
  if (idVisit) {
    const visitFound = await getVisitById(idVisit);
    if (visitFound.id_user_visitant === idUser) {
      return await visitRepository.deleteVisit(idVisit);
    }
    throw new ResponseError(httpStatus.FORBIDDEN, 'YOU DONT HAVE PERMISSIONS');
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'NOT VALID ID');
}

module.exports = deleteVisit;
