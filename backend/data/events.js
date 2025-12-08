// backend/data/events.js

const events = {
  "1": {
    id: "1",
    slug: "blueprint-series-rich-tu",
    title: "The Blueprint Series: Fireside Chat with Rich Tu",
    date: "March 20, 2025",
    location: "New York, NY",
    description:
      "An intimate conversation exploring creative careers, identity, and storytelling in the design industry.",
    introduction:
      "Join us for a live conversation with Rich Tu as we discuss creative careers, identity, and navigating the design world. This session is part of our Blueprint Series, focused on elevating emerging talent and diverse voices.",
    agenda: [
      { time: "6:00 PM", title: "Check-in & Welcome" },
      { time: "6:30 PM", title: "Fireside Chat with Rich Tu" },
      { time: "7:15 PM", title: "Audience Q&A" },
      { time: "7:45 PM", title: "Networking" },
    ],
    speakers: [
      {
        name: "Rich Tu",
        title: "VP of Design, MTV Entertainment Group",
        image: "/images/speaker1.png",
      },
      {
        name: "Moderator Name",
        title: "Host, Blueprint Series",
        image: "/images/speaker2.png",
      },
      {
        name: "Guest Name",
        title: "Designer & Creative",
        image: "/images/speaker3.png",
      },
    ],
    details:
      "This event is designed for emerging designers, creatives, and students who want to hear an honest conversation about breaking into the industry, facing imposter syndrome, and finding your unique voice.",
    previousEvents: [
      {
        title: "Blueprint Series: Designing for Community",
        date: "January 15, 2025",
      },
      {
        title: "Blueprint Series: Stories in Motion",
        date: "November 10, 2024",
      },
    ],
    faq: [
      {
        question: "Is this event free?",
        answer: "Yes, this event is free with RSVP.",
      },
      {
        question: "Will there be a recording?",
        answer:
          "We plan to record the conversation and share highlights after the event.",
      },
      {
        question: "Do I need prior design experience?",
        answer:
          "No, this event is open to anyone interested in creativity, design, or storytelling.",
      },
    ],
  },

  "2": {
    id: "2",
    slug: "blueprint-series-jane-doe",
    title: "The Blueprint Series: Building Creative Confidence with Jane Doe",
    date: "April 10, 2025",
    location: "Brooklyn, NY",
    description:
      "A conversation on creative leadership, collaboration, and building confidence in your work.",
    introduction:
      "In this Blueprint Series session, Jane Doe shares lessons from leading creative teams and building a sustainable, fulfilling career in design.",
    agenda: [
      { time: "6:00 PM", title: "Doors Open & Check-in" },
      { time: "6:30 PM", title: "Talk: Building Creative Confidence" },
      { time: "7:15 PM", title: "Q&A" },
      { time: "7:45 PM", title: "Networking" },
    ],
    speakers: [
      {
        name: "Jane Doe",
        title: "Creative Director, Studio XYZ",
        image: "/images/speaker1.png", // reuse or swap as you like
      },
      {
        name: "Host Name",
        title: "Program Host",
        image: "/images/speaker2.png",
      },
    ],
    details:
      "We’ll explore how to build confidence in your creative decision-making, communicate your ideas clearly, and collaborate effectively with cross-functional teams.",
    previousEvents: [
      {
        title: "Blueprint Series: Design Systems in Practice",
        date: "February 8, 2025",
      },
    ],
    faq: [
      {
        question: "Where is the venue?",
        answer: "The venue details will be shared via email after RSVP.",
      },
      {
        question: "Can I bring a guest?",
        answer: "Yes, guests are welcome but must RSVP separately.",
      },
    ],
  },
};

module.exports = events;
