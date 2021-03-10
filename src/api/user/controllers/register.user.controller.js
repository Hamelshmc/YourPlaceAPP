'use strict';

const jwt = require('jsonwebtoken');
const cryptoRandomString = require('crypto-random-string');
const userServices = require('../services');

const { TOKEN_SECRET } = process.env;

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function registerUser(request, response) {
  const { email, password } = request.body;
  const user = { email, password };
  try {
    const verificationCode = cryptoRandomString({ length: 64 });
    const userRegistered = await userServices.registerUser(user, verificationCode);

    const token = jwt.sign(
      { id: userRegistered.id, verified: userRegistered.verified },
      TOKEN_SECRET,
      {
        expiresIn: '1m',
      }
    );
    const refreshToken = jwt.sign(
      { id: userRegistered.id, verified: userRegistered.verified },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '24h',
      }
    );
    await userServices.sendEmail(userRegistered.id, verificationCode, email);

    return response
      .header('Authorization', `Bearer ${token}`)
      .status(httpStatus.CREATED)
      .send(
        new ResponseJson(httpStatus.CREATED, {
          user: userRegistered,
          authorization: token,
          refreshToken,
        })
      );
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = registerUser;
