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

   async getEventData(id) {
    try {
      const [
        event,] = await Promise.all([
        this.getEvent(id),
       
      ]);

      return {
        event,
       
      };
    } catch (error) {
      console.error('Error fetching event data:', error);
      throw error;
    }
}

}
  export default new EventAPI()