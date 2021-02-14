'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const notificationServices = require('../services');

async function deleteNotification(request, response) {
  try {
    const { id: idNotification } = request.params;
    await notificationServices.removeNotification(idNotification);
    return response.status(httpStatus.OK).send('DELETE');
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = deleteNotification;
