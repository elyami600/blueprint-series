const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", eventRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "API is running ✅" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

module.exports = app;
