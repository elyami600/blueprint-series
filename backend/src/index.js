// // // backend/index.js
// // const express = require("express");
// // const cors = require("cors");
// // const app = express();

// // const PORT = process.env.PORT || 4000;

// // const {
// //   eventsDB,
// //   introductionsDB,
// //   agendasDB,
// //   speakersDB,
// //   detailsDB,
// //   previousEventsDB,
// //   faqDB,
// // } = require("./src/data/mockDATE");
// // //console.log("Mock DBs loaded:", {eventsDB, introductionsDB, agendasDB, speakersDB, detailsDB, previousEventsDB, faqDB});

// // app.use(cors());
// // app.use(express.json());

// // // GET /api/event/:id
// // app.get("/api/event/:id", (req, res) => {
// //   const id = req.params.id; // "1" or "2"
// //   console.log("Received request for event ID:", req);
// //   const event = eventsDB[id];

// //   if (!event) {
// //     return res.status(404).json({ error: "Event not found" });
// //   }

// //   res.json(event);
// // })
// // // GET /api/introduction/:id
// // app.get("/api/introduction/:id", (req, res) => {
// //   const id = req.params.id;
// //   const intro = introductionsDB[id];

// //   if (!intro) {
// //     return res.status(404).json({ error: "Introduction not found" });
// //   }

// //   res.json(intro);
// // });

// // // GET /api/agenda/:id
// // app.get("/api/agenda/:id", (req, res) => {
// //   const id = req.params.id;
// //   const agenda = agendasDB[id];

// //   if (!agenda) {
// //     return res.status(404).json({ error: "Agenda not found" });
// //   }

// //   res.json(agenda);
// // });

// // // GET /api/speakers/:id
// // app.get("/api/speakers/:id", (req, res) => {
// //   const id = req.params.id;
// //   const speakers = speakersDB[id];

// //   if (!speakers) {
// //     return res.status(404).json({ error: "Speakers not found" });
// //   }

// //   res.json(speakers);
// // });

// // // GET /api/details/:id
// // app.get("/api/details/:id", (req, res) => {
// //   const id = req.params.id;
// //   const details = detailsDB[id];

// //   if (!details) {
// //     return res.status(404).json({ error: "Details not found" });
// //   }

// //   res.json(details);
// // });

// // // GET /api/previous-events/:id
// // app.get('/api/event-details/:id', (req, res) => {
// //   const id = req.params.id;
// //   const previous = previousEventsDB[id];

// //   if (!previous) {
// //     return res.status(404).json({ error: "Previous events not found" });
// //   }

// //   res.json(previous);
// // });

// // app.get("/api/previous-events/:id", (req, res) => {
// //   const id = req.params.id;
// //   const prev = previousEventsDB[id];

// //   if (!prev) {
// //     return res.status(404).json({ error: "Previous events not found" });
// //   }

// //   res.json(prev);
// // });

// // // GET /api/faq/:id
// // app.get("/api/faq/:id", (req, res) => {
// //   const id = req.params.id;
// //   const faq = faqDB[id];

// //   if (!faq) {
// //     return res.status(404).json({ error: "FAQ not found" });
// //   }

// //   res.json(faq);
// // });

// // // Define the new GET /api/events route
// // app.get('/api/events', (req, res) => {
// //   // Convert the eventsDB object into a list/array of events
// //   const allEventsList = Object.values(eventsDB); 
  
// //   if (allEventsList.length === 0) {
// //     // If no events are found, return an empty array with 200 OK status
// //     return res.status(200).json([]);
// //   }

// //   // Return the list of all events as JSON
// //   res.status(200).json(allEventsList);
// // });


// // app.listen(PORT, () => {
// //   console.log(`API running on http://localhost:${PORT}`);
// // });
// // module.exports = app;


// // backend/server.js
// const app = require("./app");

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`API running on http://localhost:${PORT}`);
//   console.log("\nAvailable endpoints:");
//   console.log("  GET /api/events");
//   console.log("  GET /api/event/:id");
//   console.log("  GET /api/introduction/:id");
//   console.log("  GET /api/agenda/:id");
//   console.log("  GET /api/speakers/:id");
//   console.log("  GET /api/event-details/:id");
//   console.log("  GET /api/previous-events/:id");
//   console.log("  GET /api/faq/:id");
// });

