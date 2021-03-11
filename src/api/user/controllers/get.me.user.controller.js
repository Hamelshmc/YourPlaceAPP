const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function getMeUser(request, response) {
  try {
    const getUser = await userServices.getUser(request.user);
    return response.status(httpStatus.OK).send(new ResponseJson(getUser));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getMeUser;
