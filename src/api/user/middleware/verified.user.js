'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');

function verified(request, response, next) {
  try {
    const { user } = request;
    console.log({ user });
    if (user && user.verified === 0) {
      throw new ResponseError(httpStatus.FORBIDDEN, 'Your account is not verified');
    }

    next();
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = verified;
