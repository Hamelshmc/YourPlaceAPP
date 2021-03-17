'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const notificationServices = require('../services');

async function showAllNotification(request, response) {
  try {
    const { id: idUser } = request.user;
    const [notifications] = await notificationServices.getNotificationCount(idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, notifications));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = showAllNotification;
