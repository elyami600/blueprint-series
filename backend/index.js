// backend/index.js
const express = require("express");
const cors = require("cors");
const events = require("./data/events"); 

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events[eventId];
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
});

app.listen(4000, () => {
  console.log("Backend API is running on http://localhost:4000");
});
