'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');

const { TOKEN_SECRET } = process.env;

const { httpStatus, ResponseError } = require('../../../helpers');

async function registerUser(request, response) {
  const { email, password } = request.body;
  const user = { email: email, password: password };
  try {
    const userRegistered = await userServices.registerUser(user);

    const token = jwt.sign(
      { id: userRegistered.id, verified: userRegistered.verified },
      TOKEN_SECRET,
      {
        expiresIn: '60m',
      }
    );

    await userServices.sendEmail(userRegistered, token, email);

    return response
      .header('Authorization', `Bearer ${token}`)
      .status(httpStatus.CREATED)
      .send({ user: userRegistered, authorization: token });
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = registerUser;
