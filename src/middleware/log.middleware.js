function logEveryRequest(req) {
  const body = JSON.stringify(req.body);
  console.log(`${req.method} : ${req.url} - ${body}`);
}

function configureLog() {
  return (req, res, next) => {
    logEveryRequest(req);
    next();
  };
}

module.exports = configureLog;
