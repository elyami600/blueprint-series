// const path = require('path');
// // This builds an absolute path relative to the current script file
// require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })
// backend/src/scripts/seed.js (VERY TOP)

const path = require('path');
require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const database = require('../config/database');
const Event    = require('../models/Event')
const Logger   = require('../utils/logger');

const seedEvents = [
  {
    title: "The BluePrint Series",
    subtitle: "A Fireside Chat with Rich Tu",
    date: "March 20, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "New York, NY",
    address: "123 Creative Avenue, New York, NY 10001",
    description: "Join us for an intimate conversation with Rich Tu",
    heroImage: "/images/hero-1.jpg",
    pastEventsImage: "/images/past-events-1.jpg",
    introduction: "Presented as part of The Gradient's Blueprint Series, this fireside chat—moderated by Love Malone, CEO of The Gradient—will dive into Rich's creative journey, his thoughts on where the industry is headed, and how design continues to shape identity, storytelling, and the future of culture.",
    agenda: [
      { time: "6:00 PM", title: "Doors Open & Check-in", description: "Welcome reception with light refreshments" },
      { time: "6:30 PM", title: "Welcome Remarks", description: "Opening address and introduction" },
      { time: "7:00 PM", title: "Fireside Chat with Rich Tu", description: "Intimate conversation about design and creativity" },
      { time: "7:45 PM", title: "Audience Q&A", description: "Open forum for questions" },
      { time: "8:15 PM", title: "Networking Reception", description: "Connect with fellow creatives" },
    ],
    speakers: [
      {
        name: "Rich Tu",
        title: "VP of Design, MTV Entertainment Group",
        bio: "Award-winning designer and creative leader",
       image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
      },
      {
        name: "Sarah Chen",
        title: "Host, Blueprint Series",
        bio: "Design advocate and community builder",
        image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
      },
      {
        name: "Alex Rivera",
        title: "Designer & Creative Director",
        bio: "Multidisciplinary designer and artist",
        image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
      },
    ],
    details: "This event is designed for emerging designers, creatives, and students who want to hear an honest conversation about breaking into the industry, facing imposter syndrome, and finding your unique voice.",
    previousEvents: [
      {
        title: "Tech Innovation Summit 2024",
        date: "March 2024",
        attendees: 450,
        image: "/images/prev-event-1.jpg",
        highlight: "Featured 25+ speakers and 300+ companies",
      },
      {
        title: "AI & Future Work Conference",
        date: "September 2023",
        attendees: 380,
        image: "/images/prev-event-2.jpg",
        highlight: "Groundbreaking AI demonstrations",
      },
      {
        title: "Digital Transformation Expo",
        date: "June 2023",
        attendees: 520,
        image: "/images/prev-event-3.jpg",
        highlight: "Largest gathering of tech leaders",
      },
    ],
    faq: [
      {
        question: "Is this event free?",
        answer: "Yes, this event is free with RSVP. However, space is limited.",
      },
      {
        question: "What should I bring?",
        answer: "Just bring yourself and an open mind! Business cards welcome.",
      },
      {
        question: "Will there be food and drinks?",
        answer: "Yes, we'll provide light refreshments throughout the evening.",
      },
      {
        question: "Can I take photos?",
        answer: "Personal photos are welcome! Professional recording is reserved for our media team.",
      },
      {
        question: "Is there a dress code?",
        answer: "Smart casual attire is recommended.",
      },
    ],
    status: "published",
  },
  {
    title: "The BluePrint Series",
    subtitle: "Building Your Personal Brand",
    date: "April 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "San Francisco, CA",
    address: "456 Market Street, San Francisco, CA 94103",
    description: "Learn strategies for building an authentic personal brand",
    heroImage: "/images/hero-2.jpg",
    pastEventsImage: "/images/past-events-2.jpg",
    introduction: "In today's digital landscape, your personal brand is your most valuable asset. Join us for an evening dedicated to understanding how to build, maintain, and leverage your personal brand authentically.",
    agenda: [
      { time: "6:00 PM", title: "Registration & Networking", description: "Check-in and meet fellow attendees" },
      { time: "6:30 PM", title: "Opening Keynote", description: "The Future of Personal Branding" },
      { time: "7:15 PM", title: "Panel Discussion", description: "Building Authentic Connections Online" },
      { time: "8:00 PM", title: "Workshop Sessions", description: "Hands-on branding exercises" },
      { time: "8:45 PM", title: "Closing & Networking", description: "Final thoughts and networking" },
    ],
    speakers: [
      {
        name: "Jessica Park",
        title: "Head of Marketing, BrandLab",
        bio: "Personal branding expert and marketing strategist",
       image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
      },
      {
        name: "David Kim",
        title: "Content Creator & Influencer",
        bio: "Digital storyteller with 500K+ followers",
        image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
      },
      {
        name: "Rachel Torres",
        title: "Brand Consultant",
        bio: "Helping professionals build authentic brands",
       image:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
      },
    ],
    details: "Whether you're a freelancer, entrepreneur, or climbing the corporate ladder, your personal brand matters. This event will equip you with practical tools and strategies to define your unique value proposition.",
    previousEvents: [
      {
        title: "Digital Marketing Expo 2024",
        date: "April 2024",
        attendees: 400,
        image: "/images/prev-event-4.jpg",
        highlight: "200+ marketing professionals networked",
      },
      {
        title: "Social Media Summit 2023",
        date: "November 2023",
        attendees: 350,
        image: "/images/prev-event-5.jpg",
        highlight: "Top influencers shared strategies",
      },
      {
        title: "Content Marketing Conference",
        date: "August 2023",
        attendees: 300,
        image: "/images/prev-event-6.jpg",
        highlight: "Hands-on content creation workshops",
      },
    ],
    faq: [
      {
        question: "Who should attend this event?",
        answer: "Professionals, entrepreneurs, freelancers, and anyone looking to enhance their personal brand.",
      },
      {
        question: "Do I need social media experience?",
        answer: "Not at all! This event is designed for all levels.",
      },
      {
        question: "Will I get workshop materials?",
        answer: "Yes, all attendees receive a comprehensive branding toolkit.",
      },
      {
        question: "Can I bring a guest?",
        answer: "Each ticket admits one person. You're welcome to register multiple people!",
      },
      {
        question: "Will there be networking opportunities?",
        answer: "Absolutely! We've built in dedicated networking time.",
      },
    ],
    status: "published",
  },
];

async function seedDatabase() {
  try {
    // Connect to database
    await database.connect();
        // DEBUG LOG
    console.log('Event is:', Event);
    console.log('Is Event a Model?', Event.prototype instanceof require('mongoose').Model);

    // Clear existing events
    // Logger.info('Clearing existing events...');
    // await Event.deleteMany({});
    try {
  await Event.collection.drop();
  Logger.info('Dropped existing collection to clear stale indexes...');
} catch (e) {
  Logger.info('Collection did not exist, starting fresh...');
}

    // Insert seed data
    Logger.info('Seeding events...');
    const events = await Event.insertMany(seedEvents);

    Logger.success(`Successfully seeded ${events.length} events`);
    
    events.forEach(event => {
      Logger.info(`  - ${event.title} (ID: ${event._id})`);
    });

    process.exit(0);
  } catch (error) {
    Logger.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run seeder
seedDatabase();