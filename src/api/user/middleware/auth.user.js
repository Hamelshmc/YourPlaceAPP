'use strict';
const jwt = require('jsonwebtoken');

const { httpStatus, ResponseError } = require('../../../helpers');

function auth(request, response, next) {
  const { authorization } = request.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new ResponseError(httpStatus.FORBIDDEN, 'Authorization required');
  }
  try {
    const token = authorization.split(' ')[1];
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    request.user = verified;
    next();
  } catch (error) {
    response
      .status(httpStatus.UNAUTHORIZED)
      .send(new ResponseError(httpStatus.UNAUTHORIZED, error, 'Invalid Token'));
  }
}

module.exports = auth;
