'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const notificationServices = require('../services');

async function showAllNotification(request, response) {
  try {
    const { id: idUser } = request.user;
    const notifications = await notificationServices.getAllNotification(idUser);
    return response.status(httpStatus.OK).send(notifications);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = showAllNotification;
