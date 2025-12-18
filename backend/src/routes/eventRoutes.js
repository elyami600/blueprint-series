
// ===================================
// FILE: backend/routes/eventRoutes.js (UPDATED with CRUD)
// ===================================
const express = require('express');
const router = express.Router();
const EventController = require('../controllers/eventController');
const { validateEventId } = require('../middleware/validation');

// ========== READ OPERATIONS ==========

// List all events
router.get('/events', EventController.getAllEvents);

// Complete event with all data (main endpoint)
router.get('/event/:id', validateEventId, EventController.getCompleteEvent);

// Basic event info only
router.get('/event/:id/basic', validateEventId, EventController.getBasicEvent);

// Individual resources
router.get('/introduction/:id', validateEventId, EventController.getIntroduction);
router.get('/agenda/:id', validateEventId, EventController.getAgenda);
router.get('/speakers/:id', validateEventId, EventController.getSpeakers);
router.get('/event-details/:id', validateEventId, EventController.getEventDetails);
router.get('/previous-events/:id', validateEventId, EventController.getPreviousEvents);
router.get('/faq/:id', validateEventId, EventController.getFAQ);

// ========== CREATE, UPDATE, DELETE ==========

// Create new event
router.post('/event', EventController.createEvent);

// Update event
router.put('/event/:id', validateEventId, EventController.updateEvent);

// Delete event (soft delete)
router.delete('/event/:id', validateEventId, EventController.deleteEvent);

module.exports = router;