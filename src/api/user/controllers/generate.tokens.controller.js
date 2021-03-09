const jwt = require('jsonwebtoken');
const userServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function generateTokens(request, response) {
  const { authorization } = request.headers;
  try {
    const token = authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, { ignoreExpiration: true });
    const newToken = jwt.sign({ id: user.id, verified: user.verified }, process.env.TOKEN_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(
      { id: user.id, verified: user.verified },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '24h',
      }
    );
    return response
      .header('Authorization', `Bearer ${newToken}`)
      .status(httpStatus.OK)
      .send(
        new ResponseJson(httpStatus.OK, {
          authorization: newToken,
          refreshToken,
        })
      );
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = generateTokens;
