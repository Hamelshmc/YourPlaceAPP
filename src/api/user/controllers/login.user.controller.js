'use strict';

const jwt = require('jsonwebtoken');
const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

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
    return response
      .header('Authorization', `Bearer ${token}`)
      .status(httpStatus.OK)
      .send(new ResponseJson(httpStatus.OK, { authorization: token }));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = loginUser;
