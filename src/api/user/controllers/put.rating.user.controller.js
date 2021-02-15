'use strict';
const userServices = require('../services');

const { httpStatus, ResponseError } = require('../../../helpers');

async function putRating(request, response) {
  const { body: rating, user: token } = request;
  const { id } = token;
  try {
    const setUser = await userServices.updateRating(rating, id);
    response.status(httpStatus.OK).send(setUser);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = putRating;
