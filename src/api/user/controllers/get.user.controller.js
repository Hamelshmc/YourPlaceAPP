const userServices = require('../services');

const { httpStatus, ResponseError } = require('../../../helpers');

async function getMeUser(request, response) {
  try {
    const getUser = await userServices.getUser(request.params);
    response.status(httpStatus.OK).send(getUser);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getMeUser;
