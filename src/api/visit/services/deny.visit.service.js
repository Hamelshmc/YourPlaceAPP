'use strict';

const visitRepository = require('../../../repositories/visit.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

async function denyVisit(idVisit, idUser) {
  try {
    return await visitRepository.denyVisit(idUser, idVisit);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error, error.message);
  }
}

module.exports = denyVisit;
