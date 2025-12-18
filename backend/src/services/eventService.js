// ===================================
// FILE: backend/services/eventService.js (UPDATED)
// ===================================
const Event = require('../models/Event');
const Logger = require('../utils/logger');

class EventService {
  /**
   * Get all active events (summary list)
   */
  static async getAllEvents() {
    try {
      const events = await Event.findActive()
        .select('title date location description')
        .sort({ date: 1 })
        .lean();

      return events.map(event => ({
        id: event._id.toString(),
        title: event.title,
        date: event.date,
        location: event.location,
        description: event.description,
      }));
    } catch (error) {
      Logger.error('Error in getAllEvents:', error);
      throw error;
    }
  }

  /**
   * Get complete event by ID
   */
  static async getCompleteEvent(id) {
    try {
      const event = await Event.findById(id).lean();
      
      if (!event) {
        return null;
      }

      // Transform MongoDB document to expected format
      return {
        id: event._id.toString(),
        title: event.title,
        subtitle: event.subtitle,
        date: event.date,
        time: event.time,
        location: event.location,
        address: event.address,
        description: event.description,
        heroImage: event.heroImage,
        pastEventsImage: event.pastEventsImage,
        introduction: event.introduction,
        agenda: event.agenda || [],
        speakers: event.speakers || [],
        details: event.details,
        previousEvents: event.previousEvents || [],
        faq: event.faq || [],
        status: event.status,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
      };
    } catch (error) {
      Logger.error('Error in getCompleteEvent:', error);
      throw error;
    }
  }

  /**
   * Create new event
   */
  static async createEvent(eventData) {
    try {
      const event = new Event(eventData);
      await event.save();
      
      Logger.success(`Event created: ${event.title}`);
      return event;
    } catch (error) {
      Logger.error('Error in createEvent:', error);
      throw error;
    }
  }

  /**
   * Update event by ID
   */
  static async updateEvent(id, updateData) {
    try {
      const event = await Event.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!event) {
        return null;
      }

      Logger.success(`Event updated: ${event.title}`);
      return event;
    } catch (error) {
      Logger.error('Error in updateEvent:', error);
      throw error;
    }
  }

  /**
   * Delete event by ID (soft delete)
   */
  static async deleteEvent(id) {
    try {
      const event = await Event.findByIdAndUpdate(
        id,
        { isActive: false },
        { new: true }
      );

      if (!event) {
        return null;
      }

      Logger.success(`Event deleted: ${event.title}`);
      return event;
    } catch (error) {
      Logger.error('Error in deleteEvent:', error);
      throw error;
    }
  }

  /**
   * Get event by ID (basic info)
   */
  static async getBasicEvent(id) {
    try {
      const event = await Event.findById(id)
        .select('title date time location address description heroImage')
        .lean();

      if (!event) {
        return null;
      }

      return {
        id: event._id.toString(),
        ...event,
      };
    } catch (error) {
      Logger.error('Error in getBasicEvent:', error);
      throw error;
    }
  }

  /**
   * Check if event exists
   */
  static async eventExists(id) {
    try {
      const count = await Event.countDocuments({ _id: id, isActive: true });
      return count > 0;
    } catch (error) {
      return false;
    }
  }
}

module.exports = EventService;