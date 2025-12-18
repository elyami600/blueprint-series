/**
 * Middleware to validate route parameters related to events.
 * Ensures the event ID is present and valid before reaching controllers.
 * Helps prevent unnecessary database queries and improves API reliability.
 */
const mongoose = require('mongoose');
const ResponseHandler = require('../utils/responseHandler');

/**
 * Validate MongoDB ObjectId format
 */
const validateEventId = (req, res, next) => {
  const { id } = req.params;
  
  if (!mongoose.isValidObjectId(id)) {
    return ResponseHandler.error(res, 'Invalid event ID format', 400);
  }
  
  next();
};

/**
 * Validate event creation data
 */
const validateEventData = (req, res, next) => {
  const { title, date, time, location, address, description, introduction, details } = req.body;
  
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!date) {
    errors.push('Date is required');
  }

  if (!time) {
    errors.push('Time is required');
  }

  if (!location) {
    errors.push('Location is required');
  }

  if (!address) {
    errors.push('Address is required');
  }

  if (!description) {
    errors.push('Description is required');
  }

  if (!introduction) {
    errors.push('Introduction is required');
  }

  if (!details) {
    errors.push('Details are required');
  }

  if (errors.length > 0) {
    return ResponseHandler.error(res, 'Validation failed', 400, errors);
  }

  next();
};

/**
 * Validate speakers array (max 3)
 */
const validateSpeakers = (req, res, next) => {
  const { speakers } = req.body;

  if (speakers && Array.isArray(speakers) && speakers.length > 3) {
    return ResponseHandler.error(res, 'Maximum 3 speakers allowed per event', 400);
  }

  next();
};

module.exports = { 
  validateEventId, 
  validateEventData,
  validateSpeakers 
};

// const mongoose = require("mongoose");

// const validateEventId = (req, res, next) => {
//   const { id } = req.params;

//   console.log("VALIDATING:", id); // <-- keep this for now

//   if (!mongoose.isValidObjectId(id)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid event ID 📍:)->",
//       errors: null,
//     });
//   }

//   next();
// };

// module.exports = { validateEventId };
