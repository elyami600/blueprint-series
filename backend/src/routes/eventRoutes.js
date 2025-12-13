// backend/routes/eventRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEvent,
  getIntroduction,
  getAgenda,
  getSpeakers,
  getEventDetails,
  getPreviousEvents,
  getFAQ,
} = require("../controllers/eventController");

// List all events
router.get("/events", getAllEvents);

// Individual resources
router.get("/event/:id", getEvent);
router.get("/introduction/:id", getIntroduction);
router.get("/agenda/:id", getAgenda);
router.get("/speakers/:id", getSpeakers);
router.get("/event-details/:id", getEventDetails);
router.get("/previous-events/:id", getPreviousEvents);
router.get("/faq/:id", getFAQ);

module.exports = router;
