'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');
const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const validateVerification = require('../services/validate.verification.service');

async function verifyUser(request, response) {
  try {
    const { id, code } = request.params;
    if (!code) {
      throw new ResponseError(httpStatus.BAD_REQUEST, 'NOT CODE IN REQUEST');
    }
    const isActivated = await validateVerification(code);
    if (!isActivated) {
      throw new ResponseError(
        httpStatus.CONFLICT,
        'Account not activated. Verification code expired. Or yet actived.'
      );
    } else {
      await userServices.verifyUser(id);
      const token = jwt.sign({ id, verified: 1 }, process.env.TOKEN_SECRET, {
        expiresIn: '1m',
      });
      const refreshToken = jwt.sign({ id, verified: 1 }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '24h',
      });
      response
        .status(httpStatus.CREATED)
        .send(new ResponseJson({ message: 'Account activated', token, refreshToken }));
    }
  } catch (error) {
    response.send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = verifyUser;
