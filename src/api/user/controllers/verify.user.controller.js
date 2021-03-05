'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');
const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function verifyUser(request, response) {
  const { id, secretCode } = await request.params;
  const verified = jwt.verify(secretCode, process.env.TOKEN_SECRET);
  try {
    if (verified.id === id && verified.verified === 0) {
      await userServices.verifyUser(verified.id);
      return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'VERIFIED'));
    }
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = verifyUser;
