'use strict';

const userServices = require('../services');

const { httpStatus, ResponseError } = require('../../../helpers');

async function putUser(request, response) {
  const { body, user: token } = request;
  const { id } = token;
  const { user, address } = body;
  try {
    await userServices.updateUser(user, address, id);
    const showUser = await userServices.getUser({ id });
    return response.status(httpStatus.OK).send(showUser);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = putUser;
