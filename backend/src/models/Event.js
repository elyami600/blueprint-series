const mongoose = require("mongoose");

const AgendaItemSchema = new mongoose.Schema(
  {
    time: String,
    title: String,
    description: String,
  },
  { _id: false }
);

const SpeakerSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    bio: String,
    image: String,
  },
  { _id: false }
);

const PreviousEventSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    attendees: Number,
    image: String,
    highlight: String,
  },
  { _id: false }
);

const FAQSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { _id: false }
);

const EventSchema = new mongoose.Schema(
  {
    eventId: { type: String, required: true, unique: true }, // "1", "2"
    slug: String,
    title: String,
    date: String,
    time: String,
    location: String,
    address: String,
    description: String,
    heroImage: String,

    introduction: String,
    agenda: [AgendaItemSchema],
    speakers: [SpeakerSchema],
    details: String,
    previousEvents: [PreviousEventSchema],
    faq: [FAQSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
