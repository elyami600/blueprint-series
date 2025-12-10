// lib/api.js - API Service Layer
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

class EventAPI {
  async fetchWithError(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async getEvent(id) {
    return this.fetchWithError(`${API_URL}/api/event/${id}`);
  }

  async getIntroduction(id) {
    return this.fetchWithError(`${API_URL}/api/introduction/${id}`);
  }

  async getAgenda(id) {
    return this.fetchWithError(`${API_URL}/api/agenda/${id}`);
  }

  async getSpeakers(id) {
    return this.fetchWithError(`${API_URL}/api/speakers/${id}`);
  }

  async getEventDetails(id) {
    return this.fetchWithError(`${API_URL}/api/event-details/${id}`);
  }

  async getPreviousEvents(id) {
    return this.fetchWithError(`${API_URL}/api/previous-events/${id}`);
  }

  async getFAQ(id) {
    return this.fetchWithError(`${API_URL}/api/faq/${id}`);
  }

  async getAllEvents() {
    return this.fetchWithError(`${API_URL}/api/events`);
  }

  // Fetch all data for an event in one go
  async getEventData(id) {
    try {
      const [
        event,
        introduction,
        agenda,
        speakers,
        eventDetails,
        previousEvents,
        faq
      ] = await Promise.all([
        this.getEvent(id),
        this.getIntroduction(id),
        this.getAgenda(id),
        this.getSpeakers(id),
        this.getEventDetails(id),
        this.getPreviousEvents(id),
        this.getFAQ(id)
      ]);

      return {
        event,
        introduction,
        agenda,
        speakers,
        eventDetails,
        previousEvents,
        faq
      };
    } catch (error) {
      console.error('Error fetching event data:', error);
      throw error;
    }
  }
}

export default new EventAPI();