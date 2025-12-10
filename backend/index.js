// // backend/index.js
// const express = require("express");
// const cors = require("cors");
// const events = require("./data/events"); 

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/api/events/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const event = events[eventId];
//   if (event) {
//     res.json(event);
//   } else {
//     res.status(404).json({ error: 'Event not found' });
//   }
// });

// app.listen(4000, () => {
//   console.log("Backend API is running on http://localhost:4000");
// });


// const express = require('express');
// const cors = require('cors');
// const eventsDB = require("./data/mockDATE"); 
// console.log(eventsDB)

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());


// // API Routes
// app.get('/api/event/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const event = eventsDB[eventId];
//   if (event) {
//     res.json(event);
//   } else {
//     res.status(404).json({ error: 'Event not found' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
//   console.log('\n📍 Available Routes:');
//   console.log(`   Event 1: http://localhost:3000/event/1`);
//   console.log(`   Event 2: http://localhost:3000/event/2`);
//   console.log('\n🔌 API Endpoints:');
//   console.log(`   GET /api/event/:id`);
//   console.log(`   GET /api/introduction/:id`);
//   console.log(`   GET /api/agenda/:id`);
//   console.log(`   GET /api/speakers/:id`);
//   console.log(`   GET /api/event-details/:id`);
//   console.log(`   GET /api/previous-events/:id`);
//   console.log(`   GET /api/faq/:id`);
//   console.log(`   GET /api/events`);
// });

// module.exports = app;



// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;

// 👉 import your mock DBs
const {
  eventsDB,
  introductionsDB,
  agendasDB,
  speakersDB,
  detailsDB,
  previousEventsDB,
  faqDB,
} = require("./data/mockDATE");
//console.log("Mock DBs loaded:", {eventsDB, introductionsDB, agendasDB, speakersDB, detailsDB, previousEventsDB, faqDB});

app.use(cors());
app.use(express.json());

// GET /api/event/:id
app.get("/api/event/:id", (req, res) => {
  const id = req.params.id; // "1" or "2"
  const event = eventsDB[id];

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  res.json(event);
})
// GET /api/introduction/:id
app.get("/api/introduction/:id", (req, res) => {
  const id = req.params.id;
  const intro = introductionsDB[id];

  if (!intro) {
    return res.status(404).json({ error: "Introduction not found" });
  }

  res.json(intro);
});

// GET /api/agenda/:id
app.get("/api/agenda/:id", (req, res) => {
  const id = req.params.id;
  const agenda = agendasDB[id];

  if (!agenda) {
    return res.status(404).json({ error: "Agenda not found" });
  }

  res.json(agenda);
});

// GET /api/speakers/:id
app.get("/api/speakers/:id", (req, res) => {
  const id = req.params.id;
  const speakers = speakersDB[id];

  if (!speakers) {
    return res.status(404).json({ error: "Speakers not found" });
  }

  res.json(speakers);
});

// GET /api/details/:id
app.get("/api/details/:id", (req, res) => {
  const id = req.params.id;
  const details = detailsDB[id];

  if (!details) {
    return res.status(404).json({ error: "Details not found" });
  }

  res.json(details);
});

// GET /api/previous-events/:id
app.get("/api/previous-events/:id", (req, res) => {
  const id = req.params.id;
  const previous = previousEventsDB[id];

  if (!previous) {
    return res.status(404).json({ error: "Previous events not found" });
  }

  res.json(previous);
});

// GET /api/faq/:id
app.get("/api/faq/:id", (req, res) => {
  const id = req.params.id;
  const faq = faqDB[id];

  if (!faq) {
    return res.status(404).json({ error: "FAQ not found" });
  }

  res.json(faq);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
module.exports = app;