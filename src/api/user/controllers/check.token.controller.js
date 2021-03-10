const jwt = require('jsonwebtoken');
const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function checkToken(request, response) {
  const { authorization } = request.headers;
  try {
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    return response
      .header('Authorization', `Bearer ${token}`)
      .status(httpStatus.OK)
      .send(new ResponseJson(httpStatus.OK));
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = checkToken;
