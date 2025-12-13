// backend/controllers/eventController.js
const {
  eventsDB,
  introductionsDB,
  agendasDB,
  speakersDB,
  detailsDB,
  previousEventsDB,
  faqDB,
} = require("../data/mockData.js");

// Helper to send 404 if resource missing
function notFound(res, resourceName) {
  return res.status(404).json({ error: `${resourceName} not found` });
}

exports.getAllEvents = (req, res) => {
  const allEvents = Object.values(eventsDB);
  return res.status(200).json(allEvents);
};

exports.getEvent = (req, res) => {
  const { id } = req.params;
  const event = eventsDB[id];
  if (!event) return notFound(res, "Event");
  return res.json(event);
};

exports.getIntroduction = (req, res) => {
  const { id } = req.params;
  const intro = introductionsDB[id];
  if (!intro) return notFound(res, "Introduction");
  return res.json(intro);
};

exports.getAgenda = (req, res) => {
  const { id } = req.params;
  const agenda = agendasDB[id];
  if (!agenda) return notFound(res, "Agenda");
  return res.json(agenda);
};

exports.getSpeakers = (req, res) => {
  const { id } = req.params;
  const speakers = speakersDB[id];
  if (!speakers) return notFound(res, "Speakers");
  return res.json(speakers);
};

exports.getEventDetails = (req, res) => {
  const { id } = req.params;
  const details = detailsDB[id];
  if (!details) return notFound(res, "Event details");
  return res.json(details);
};

exports.getPreviousEvents = (req, res) => {
  const { id } = req.params;
  const prev = previousEventsDB[id];
  if (!prev) return notFound(res, "Previous events");
  return res.json(prev);
};

exports.getFAQ = (req, res) => {
  const { id } = req.params;
  const faq = faqDB[id];
  if (!faq) return notFound(res, "FAQ");
  return res.json(faq);
};
