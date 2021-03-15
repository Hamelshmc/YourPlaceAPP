'use strict';

const visitRepository = require('../../../repositories/visit.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

async function aceptVisit(idVisit, idUser) {
  try {
    return await visitRepository.aceptVisit(idUser, idVisit);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error, error.message);
  }
}

module.exports = aceptVisit;
