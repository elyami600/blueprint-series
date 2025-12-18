/**
 * Event Model (MongoDB/Mongoose)
 * ------------------------------------------------------------
 * Defines the schema for an "Event" document, including:
 * - Core event info (title, date, location, hero image, etc.)
 * - Embedded arrays for agenda items, speakers (max 3), previous events, and FAQs
 * - Helpful indexes for common queries
 * - Virtual `id` field (string version of `_id`) for cleaner frontend usage
 * - Instance methods (publish/cancel) and static query helpers (findActive/findUpcoming)
 */
const mongoose = require('mongoose');

const AgendaItemSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { _id: false });

const SpeakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, { _id: false });

const PreviousEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  attendees: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
}, { _id: false });

const FAQSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
}, { _id: false });

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    heroImage: {
      type: String,
      required: [true, 'Hero image is required'],
    },
    pastEventsImage: {
      type: String,
    },
    introduction: {
      type: String,
      required: [true, 'Introduction is required'],
    },
    agenda: {
      type: [AgendaItemSchema],
      default: [],
    },
    speakers: {
      type: [SpeakerSchema],
      default: [],
      validate: {
        validator: function(v) {
          return v.length <= 4;
        },
        message: 'Maximum 4 speakers allowed per event',
      },
    },
    details: {
      type: String,
      required: [true, 'Details are required'],
    },
    previousEvents: {
      type: [PreviousEventSchema],
      default: [],
    },
    faq: {
      type: [FAQSchema],
      default: [],
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'cancelled'],
      default: 'published',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
EventSchema.index({ status: 1, isActive: 1 });
EventSchema.index({ date: 1 });

// Virtual for ID
EventSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Instance methods
EventSchema.methods.publish = function() {
  this.status = 'published';
  return this.save();
};

EventSchema.methods.cancel = function() {
  this.status = 'cancelled';
  return this.save();
};

// Static methods
EventSchema.statics.findActive = function() {
  return this.find({ isActive: true, status: 'published' });
};

EventSchema.statics.findUpcoming = function() {
  const today = new Date().toISOString().split('T')[0];
  return this.find({ 
    isActive: true, 
    status: 'published',
    date: { $gte: today }
  });
};

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;