'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const visitRepository = require('../../../repositories/visit.repository');

async function getVisitById(id) {
  if (id) {
    const [visit] = await visitRepository.getVisityById(id);
    if (visit) {
      return visit;
    }
    throw new ResponseError(httpStatus.NOT_FOUND, 'VISIT NOT FOUND');
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'NOT VALID ID');
}

module.exports = getVisitById;
