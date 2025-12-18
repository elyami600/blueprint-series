// ===================================
// FILE: backend/controllers/eventController.js (FIXED)
// ===================================
const EventService = require('../services/eventService');
const ResponseHandler = require('../utils/responseHandler');

class EventController {
  // GET /api/events
  static async getAllEvents(req, res, next) {
    try {
      const events = await EventService.getAllEvents(); // ✅ Added await
      return ResponseHandler.success(res, events, 'Events retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/event/:id (complete event data)
  static async getCompleteEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Added await

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      return ResponseHandler.success(res, event, 'Event retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/event/:id/basic
  static async getBasicEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getBasicEvent(id); // ✅ Added await

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      return ResponseHandler.success(res, event, 'Event retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/introduction/:id
  static async getIntroduction(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event
      
      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const intro = { content: event.introduction };
      return ResponseHandler.success(res, intro, 'Introduction retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/agenda/:id
  static async getAgenda(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const agenda = { items: event.agenda };
      return ResponseHandler.success(res, agenda, 'Agenda retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/speakers/:id
  static async getSpeakers(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const speakers = { speakers: event.speakers };
      return ResponseHandler.success(res, speakers, 'Speakers retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/event-details/:id
  static async getEventDetails(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const details = { content: event.details };
      return ResponseHandler.success(res, details, 'Event details retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/previous-events/:id
  static async getPreviousEvents(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const prev = { events: event.previousEvents };
      return ResponseHandler.success(res, prev, 'Previous events retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // GET /api/faq/:id
  static async getFAQ(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getCompleteEvent(id); // ✅ Get complete event

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      const faq = { questions: event.faq };
      return ResponseHandler.success(res, faq, 'FAQ retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  // POST /api/event (Create new event)
  static async createEvent(req, res, next) {
    try {
      const event = await EventService.createEvent(req.body);
      return ResponseHandler.success(
        res, 
        event, 
        'Event created successfully', 
        201
      );
    } catch (error) {
      next(error);
    }
  }

  // PUT /api/event/:id (Update event)
  static async updateEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.updateEvent(id, req.body);

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      return ResponseHandler.success(res, event, 'Event updated successfully');
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/event/:id (Soft delete)
  static async deleteEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.deleteEvent(id);

      if (!event) {
        return ResponseHandler.notFound(res, 'Event');
      }

      return ResponseHandler.success(res, null, 'Event deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EventController;
