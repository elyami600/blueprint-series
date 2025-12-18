/**
 * Logger Utility
 * ----------------
 * Centralized console logging helper for the backend application.
 * 
 * Features:
 * - Color-coded log levels for better readability
 * - Consistent log formatting across the app
 * - Supports info, success, warning, error, and request logs
 * 
 * Usage:
 * Logger.info("Server started");
 * Logger.success("Database connected");
 * Logger.warn("Deprecated API used");
 * Logger.error("Failed to fetch data", error);
 * Logger.request("GET", "/api/events");
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

class Logger {
  static info(message) {
    console.log(`${colors.cyan}[INFO]${colors.reset} ${message}`);
  }

  static success(message) {
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${message}`);
  }

  static warn(message) {
    console.log(`${colors.yellow}[WARN]${colors.reset} ${message}`);
  }

  static error(message, error = null) {
    console.error(`${colors.red}[ERROR]${colors.reset} ${message}`);
    if (error) console.error(error);
  }

  static request(method, path) {
    console.log(`${colors.bright}[${method}]${colors.reset} ${path}`);
  }
}

module.exports = Logger;