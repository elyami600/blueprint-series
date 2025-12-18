/**
 * ResponseHandler
 * ----------------
 * Centralized utility for sending consistent API responses.
 * Helps standardize success and error responses across controllers,
 * improves readability, and makes the API easier to maintain and debug.
 */
class ResponseHandler {
  static success(res, data, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message = 'Error', statusCode = 500, errors = null) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  static notFound(res, resource = 'Resource') {
    return res.status(404).json({
      success: false,
      message: `${resource} not found`,
    });
  }
}

module.exports = ResponseHandler;