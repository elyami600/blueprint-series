const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`\n✅ API running on http://localhost:${PORT}`);
  console.log("\n📍 Frontend URLs:");
  console.log("   Homepage: http://localhost:3000");
  console.log("   Event 1:  http://localhost:3000/events/1");
  console.log("   Event 2:  http://localhost:3000/events/2");
  console.log("\n🔌 API Endpoints:");
  console.log("   GET /api/events              - List all events");
  console.log("   GET /api/event/:id           - Get complete event data");
  console.log("   GET /api/introduction/:id    - Get introduction only");
  console.log("   GET /api/agenda/:id          - Get agenda only");
  console.log("   GET /api/speakers/:id        - Get speakers only");
  console.log("   GET /api/event-details/:id   - Get details only");
  console.log("   GET /api/previous-events/:id - Get previous events");
  console.log("   GET /api/faq/:id             - Get FAQ only");
  console.log("\n💡 Test API:");
  console.log(`   curl http://localhost:${PORT}/health`);
  console.log(`   curl http://localhost:${PORT}/api/event/1\n`);
});