const express = require("express");
const cors = require("cors");
const events = require("./data/events");

const app = express();

app.use(cors());
app.use(express.json());

// One endpoint that returns all data for an event
app.get("/api/events/:id", (req, res) => {
  const event = events[req.params.id];
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.json(event);
});

// Optional: list of all events (for a simple events index page)
app.get("/api/events", (req, res) => {
  res.json(Object.values(events));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API is running on http://localhost:${PORT}`);
});
