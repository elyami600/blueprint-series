const request = require("supertest");
const app = require("../src/app"); // make sure this exports your Express app

describe("Event API", () => {
  it("GET /api/events returns a list of events", async () => {
    const res = await request(app).get("/api/events");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("id");
    expect(res.body[0]).toHaveProperty("title");
  });

  it("GET /api/event/1 returns a single event", async () => {
    const res = await request(app).get("/api/event/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("title");
  });

  it("GET /api/introduction/1 returns the introduction content", async () => {
    const res = await request(app).get("/api/introduction/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("content");
    expect(typeof res.body.content).toBe("string");
  });

  it("GET /api/agenda/1 returns the Agenda content", async () => {
    const res = await request(app).get("/api/agenda/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("items");
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items[0]).toHaveProperty("time");
    expect(res.body.items[0]).toHaveProperty("title");
    expect(res.body.items[0]).toHaveProperty("description");
  });
  

  it("GET /api/speakers/1 returns the speaker content", async () => {
    const res = await request(app).get("/api/speakers/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("speakers");
    expect(Array.isArray(res.body.speakers)).toBe(true);
    expect(res.body.speakers[0]).toHaveProperty("id", 1);
    expect(res.body.speakers[0]).toHaveProperty("name");
    expect(res.body.speakers[0]).toHaveProperty("title");
    expect(res.body.speakers[0]).toHaveProperty("bio");
  });

  it("GET /api/event-details/1 returns the introduction content", async () => {
    const res = await request(app).get("/api/event-details/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("content");
    expect(typeof res.body.content).toBe("string");
  });

  it("GET /api/previous-events/1 returns the speaker content", async () => {
    const res = await request(app).get("/api/previous-events/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("events");
    expect(Array.isArray(res.body.events)).toBe(true);
    expect(res.body.events[0]).toHaveProperty("id", 1);
    expect(res.body.events[0]).toHaveProperty("title");
    expect(res.body.events[0]).toHaveProperty("attendees",450);
    expect(res.body.events[0]).toHaveProperty("image");
     expect(res.body.events[0]).toHaveProperty("highlight");
  });


    it("GET /api/faq/1 returns the FAQ content", async () => {
    const res = await request(app).get("/api/faq/1");
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("questions");
    expect(Array.isArray(res.body.questions)).toBe(true);
    expect(res.body.questions[0]).toHaveProperty("id", 1);
    expect(res.body.questions[0]).toHaveProperty("question");
    expect(res.body.questions[0]).toHaveProperty("answer");


    });

  it("GET /api/event/999 returns 404", async () => {
    const res = await request(app).get("/api/event/999");

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
