'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const notificationServices = require('../services');

async function deleteNotification(request, response) {
  try {
    const { id: idNotification } = request.params;
    await notificationServices.removeNotification(idNotification);
    return response
      .status(httpStatus.OK)
      .send(new ResponseJson(httpStatus.OK, 'NOTIFICATION DELETED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = deleteNotification;
