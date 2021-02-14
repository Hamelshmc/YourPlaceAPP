const memoryCache = require('memory-cache');
const { CACHE_KEY } = process.env;

function cache(duration) {
  return (req, res, next) => {
    const key = CACHE_KEY + req.originalUrl || req.url;
    const cachedBody = memoryCache.get(key);

    if (cachedBody) {
      return res.send(JSON.parse(cachedBody));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        memoryCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
}

module.exports = cache;
