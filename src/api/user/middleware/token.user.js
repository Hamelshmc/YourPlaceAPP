const jwt = require('jsonwebtoken');
const httpStatus = require('../../../helpers/httpStatus.helper');
const ResponseError = require('../../../helpers/responseError.helper');

function handleToken(request, response, next) {
  const { authorization } = request.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new ResponseError(httpStatus.FORBIDDEN, 'Authorization required');
  }
  const token = authorization.split(' ')[1];
  const userData = jwt.verify(token, process.env.TOKEN_SECRET, { ignoreExpiration: true });
  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          const refreshedToken = jwt.sign(
            { id: userData.id, verified: userData.verified },
            process.env.TOKEN_SECRET,
            {
              expiresIn: '1m',
            }
          );
          const newToken = jwt.verify(refreshedToken, process.env.TOKEN_SECRET);
          request.user = newToken;
          next();
        } else if (err) {
          return response.json({ success: false, message: 'Failed to authenticate token.' });
        }
      } else {
        request.user = userData;
        next();
      }
    });
  } catch (error) {
    return response.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
}

module.exports = handleToken;
