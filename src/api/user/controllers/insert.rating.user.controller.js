'use strict';

const userServices = require('../services');

const { httpStatus, ResponseError } = require('../../../helpers');

async function postRating(request, response) {
  const { body: rating, user: token } = request;
  const { id } = token;
  try {
    const setUser = await userServices.insertRating(rating, id);
    return response.status(httpStatus.CREATED).send(new ResponseJson(httpStatus.CREATED, setUser));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = postRating;
