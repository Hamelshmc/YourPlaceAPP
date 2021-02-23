function errorMiddleware(error, req, res, next) {
  if (!error) next();

  let { status = 500, message, data } = error;

  console.log(`[Error] ${error}`);

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
