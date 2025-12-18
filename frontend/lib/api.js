const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

class APIError extends Error {
  constructor(message, statusCode, errors = null) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

class EventAPI {
  /**
   * Generic fetch wrapper with error handling
   */
  async fetchWithError(url, options = {}) {
    try {
      console.log(`[API] Fetching: ${url}`);
      
      const response = await fetch(url, {
        ...options,
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        const message = data.message || data.error || 'Request failed';
        throw new APIError(message, response.status, data.errors);
      }

      // Handle new response format: { success, message, data }
      if (data.success !== undefined) {
        return data.data;
      }

      // Fallback for direct data responses
      return data;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      
      console.error('[API] Error:', error);
      throw new APIError(
        error.message || 'Network error occurred',
        0
      );
    }
  }

  /**
   * Get all events (summary list)
   * @returns {Promise<Array>} List of events
   */
  async getAllEvents() {
    return this.fetchWithError(`${API_BASE_URL}/api/events`);
  }

  /**
   * Get complete event with all data
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Complete event data
   */
  async getCompleteEvent(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/event/${id}`);
  }

  /**
   * Get basic event information only
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Basic event data
   */
  async getBasicEvent(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/event/${id}/basic`);
  }

  /**
   * Get event introduction
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Introduction data
   */
  async getIntroduction(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/introduction/${id}`);
  }

  /**
   * Get event agenda
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Agenda data
   */
  async getAgenda(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/agenda/${id}`);
  }

  /**
   * Get event speakers
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Speakers data
   */
  async getSpeakers(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/speakers/${id}`);
  }

  /**
   * Get event details
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Event details
   */
  async getEventDetails(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/event-details/${id}`);
  }

  /**
   * Get previous events
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} Previous events data
   */
  async getPreviousEvents(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/previous-events/${id}`);
  }

  /**
   * Get FAQ
   * @param {string|number} id - Event ID
   * @returns {Promise<Object>} FAQ data
   */
  async getFAQ(id) {
    return this.fetchWithError(`${API_BASE_URL}/api/faq/${id}`);
  }

  /**
   * Check API health
   * @returns {Promise<Object>} Health status
   */
  async checkHealth() {
    return this.fetchWithError(`${API_BASE_URL}/health`);
  }
}

// Export singleton instance
const eventAPI = new EventAPI();
export default eventAPI;

// Also export the class and error for advanced usage
export { EventAPI, APIError };
