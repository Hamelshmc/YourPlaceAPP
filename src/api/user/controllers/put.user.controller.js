'use strict';

const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function putUser(request, response) {
  const { body, user: token } = request;
  const { id } = token;
  const { userInfo: user, userAddress: address } = body;
  try {
    await userServices.updateUser(user, address, id);
    const showUser = await userServices.getUser({ id });
    console.log({ showUser });
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, showUser));
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = putUser;
