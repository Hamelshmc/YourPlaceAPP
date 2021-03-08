'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');
const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function verifyUser(request, response) {
  const { id, secretCode } = await request.params;
  const verified = jwt.verify(secretCode, process.env.TOKEN_SECRET);
  try {
    if (verified.id === id) {
      await userServices.verifyUser(verified.id);
      return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'VERIFIED'));
    }
  } catch (error) {
    return response
      .status(error.status || 500)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = verifyUser;
