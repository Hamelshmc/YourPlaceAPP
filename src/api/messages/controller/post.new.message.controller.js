'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const messageServices = require('../services');

async function newMessage(request, response) {
  try {
    const { message, idUserReceiver } = request.body;
    const { id: idUser } = request.user;
    const messageBody = { message, idUserReceiver };
    await messageServices.insertMessage(messageBody, idUser);
    return response.status(httpStatus.OK).send('INSERTED MESSAGE');
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}
module.exports = newMessage;
