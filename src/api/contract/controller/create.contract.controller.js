'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const contractServices = require('../services');

async function createContract(request, response) {
  try {
    const { idBooking } = request.params;
    const { id: idUser } = request.user;

    const contract = await contractServices.createContract(idBooking, idUser);
    response.status(httpStatus.OK).send({ contract: contract });
  } catch (error) {
    response
      .status(httpStatus.BAD_REQUEST)
      .send(new ResponseError(httpStatus.BAD_REQUEST, error, error.message));
  }
}

module.exports = createContract;
