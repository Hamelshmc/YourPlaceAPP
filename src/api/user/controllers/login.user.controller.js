'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');

const { httpStatus, ResponseError } = require('../../../helpers');

async function loginUser(request, response) {
  const { email, password } = request.body;
  const user = { email, password };
  try {
    const userLogged = await userServices.loginUser(user);
    const token = jwt.sign(
      { id: userLogged.id, verified: userLogged.verified },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '60m',
      }
    );
    response
      .header('Authorization', `Bearer ${token}`)
      .status(httpStatus.OK)
      .send({ response: 'Logged In!', authorization: token });
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = loginUser;
