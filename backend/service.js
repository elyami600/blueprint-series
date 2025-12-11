// const express = require('express');
// const cors = require('cors');
// const eventsDB = require("./data/mockDATE"); 

// const app = express();
// const PORT = 6000;

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