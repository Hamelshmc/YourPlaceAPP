'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const messageServices = require('../services');

async function newMessage(request, response) {
  try {
    const { message, idUserReceiver } = request.body;
    const { id: idUser } = request.user;
    const messageBody = { message, idUserReceiver };
    await messageServices.insertMessage(messageBody, idUser);
    return response
      .status(httpStatus.CREATED)
      .send(new ResponseJson(httpStatus.CREATED, 'INSERTED MESSAGE'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}
module.exports = newMessage;
