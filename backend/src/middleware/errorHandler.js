/**
 * Global error-handling middleware for the Express application.
 *
 * This middleware centralizes error responses so all API errors
 * follow a consistent structure. It logs errors using the Logger
 * utility and returns safe, user-friendly messages to clients.
 *
 * In development mode, the error stack trace is included to help
 * with debugging. In production, sensitive details are hidden.
 */

const Logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  Logger.error('Error occurred:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;