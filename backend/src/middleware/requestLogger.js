const Logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  Logger.request(req.method, req.path);
  next();
};

module.exports = requestLogger;