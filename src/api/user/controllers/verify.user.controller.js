'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');
const { httpStatus, ResponseError } = require('../../../helpers');

async function verifyUser(request, response) {
  const { id, secretCode } = await request.params;
  const verified = await jwt.verify(secretCode, process.env.TOKEN_SECRET);
  try {
    if (verified.id === id) {
      await userServices.verifyUser(verified.id);
      return response.status(httpStatus.OK).send('VERIFIED');
    }
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = verifyUser;
