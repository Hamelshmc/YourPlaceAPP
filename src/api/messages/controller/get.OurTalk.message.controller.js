'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const messageServices = require('../services');

async function getOurTalk(request, response) {
  try {
    const { id } = request.params;
    const { id: idUser } = request.user;
    const talks = await messageServices.findOurTalk(idUser, id);
    return response.status(httpStatus.OK).send(talks);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getOurTalk;
