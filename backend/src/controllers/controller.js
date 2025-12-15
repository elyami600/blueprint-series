const Event = require("../models/Event");

// Helper
function notFound(res, resourceName = "Resource") {
  return res.status(404).json({ error: `${resourceName} not found` });
}

// GET /api/events  -> list page (lightweight fields)
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({})
      .select("eventId title date location description heroImage")
      .lean();

    return res.status(200).json(events);
  } catch (err) {
    console.error("getAllEvents error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/event/:id -> full event (everything)
exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) }).lean();
    if (!event) return notFound(res, "Event");

    return res.json(event);
  } catch (err) {
    console.error("getEvent error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/introduction/:id
exports.getIntroduction = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("introduction")
      .lean();

    if (!event) return notFound(res, "Event");
    if (!event.introduction) return notFound(res, "Introduction");

    return res.json({ content: event.introduction });
  } catch (err) {
    console.error("getIntroduction error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/agenda/:id
exports.getAgenda = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("agenda")
      .lean();

    if (!event) return notFound(res, "Event");
    return res.json({ items: event.agenda || [] });
  } catch (err) {
    console.error("getAgenda error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/speakers/:id
exports.getSpeakers = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("speakers")
      .lean();

    if (!event) return notFound(res, "Event");
    return res.json({ speakers: (event.speakers || []).slice(0, 3) });
  } catch (err) {
    console.error("getSpeakers error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/event-details/:id
exports.getEventDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("details")
      .lean();

    if (!event) return notFound(res, "Event");
    if (!event.details) return notFound(res, "Event details");

    return res.json({ content: event.details });
  } catch (err) {
    console.error("getEventDetails error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/previous-events/:id
exports.getPreviousEvents = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("previousEvents")
      .lean();

    if (!event) return notFound(res, "Event");
    return res.json({ events: event.previousEvents || [] });
  } catch (err) {
    console.error("getPreviousEvents error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/faq/:id
exports.getFAQ = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findOne({ eventId: String(id) })
      .select("faq")
      .lean();

    if (!event) return notFound(res, "Event");
    return res.json({ questions: event.faq || [] });
  } catch (err) {
    console.error("getFAQ error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
