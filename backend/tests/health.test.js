const request = require("supertest");
const app = require("../src/app");

describe("Health check", () => {
  it("GET / should return 200 and a message", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/API is running/i);
  });
});
