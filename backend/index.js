// backend/index.js
const express = require("express");
const cors = require("cors");
const events = require("./data/events"); // now matches our export

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/events/:id", (req, res) => {
  const { id } = req.params;
  const event = events[id];

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
});

app.get("/api/events", (req, res) => {
  res.json(Object.values(events));
});

app.listen(4000, () => {
  console.log("Backend API is running on http://localhost:4000");
});
