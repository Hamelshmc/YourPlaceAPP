'use strict';

const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function putRating(request, response) {
  const { body: rating, user: token } = request;
  const { id } = token;
  try {
    const setUser = await userServices.updateRating(rating, id);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, setUser));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = putRating;
