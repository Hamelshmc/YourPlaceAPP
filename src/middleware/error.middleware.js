function errorMiddleware(error, req, res, next) {
  let { status = 500, message, data } = error;

  console.log(`[Error] ${error}`);

  // If status code is 500 - change the message to Internal server error
  message = error.message || 'Internal Server Error';

  error = {
    type: 'error',
    status,
    message,
    ...(data && data),
  };

  res.status(status || 500).send(error);
}

module.exports = errorMiddleware;
