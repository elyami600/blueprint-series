
// Simple in-memory data for 2 events
const events = {
  "1": {
    id: 1,
    slug: "blueprint-series",
    title: "The BluePrint Series: A Fireside Chat with Rich Tu",
    date: "March 20, 2025",
    location: "New York, NY",
    heroImage: "/hero.jpg", // same for all events
    intro:
      "Join a live conversation with Rich Tu, the award-winning designer behind the official 2019 FIFA World Cup poster...",
    agenda: [
      { time: "5:30 PM", label: "DOORS OPEN" },
      { time: "6:00 PM", label: "WELCOME & INTRODUCTIONS" },
      { time: "6:15 PM", label: "FIRESIDE CHAT" },
      { time: "7:00 PM", label: "Q&A" },
      { time: "7:30 PM", label: "NETWORKING" }
    ],
    speakers: [
      {
        name: "Rich Tu",
        title: "Artist",
        photo: "/speakers/rich-tu.jpg"
      },
      {
        name: "Jane Hudson",
        title: "Creative Director, XYZ",
        photo: "/speakers/jane-hudson.jpg"
      },
      {
        name: "Mina Chang",
        title: "Host",
        photo: "/speakers/mina-chang.jpg"
      }
    ],
    detailsTitle: "The Event",
    detailsBody:
      "Blueprint is a series of conversations with designers pushing culture forward. In this session, Rich will walk us through his process, from early sketches to the final FIFA World Cup poster...",
    previousEvents: [
      { title: "BluePrint: Designing the Future", year: 2023 },
      { title: "BluePrint: Visual Stories", year: 2022 }
    ],
    faq: [
      {
        question: "Do I need a ticket?",
        answer: "Yes, please reserve a spot in advance. (Placeholder text for now.)"
      },
      {
        question: "Will this be recorded?",
        answer: "A recording may be shared after the event. (Placeholder.)"
      }
    ]
  },
  "2": {
    id: 2,
    slug: "future-of-product-design",
    title: "The Future of Product Design",
    date: "April 10, 2025",
    location: "Brooklyn, NY",
    heroImage: "/hero.jpg",
    intro:
      "A panel discussion on how emerging tools are changing the way designers prototype and ship products.",
    agenda: [
      { time: "6:00 PM", label: "CHECK-IN" },
      { time: "6:30 PM", label: "OPENING REMARKS" },
      { time: "6:45 PM", label: "PANEL DISCUSSION" },
      { time: "7:30 PM", label: "AUDIENCE Q&A" },
      { time: "8:00 PM", label: "MIXER" }
    ],
    speakers: [
      { name: "Alex Kim", title: "Head of Product, Alpha", photo: "/speakers/alex-kim.jpg" },
      { name: "Sara Lopez", title: "Sr. Product Designer, Beta", photo: "/speakers/sara-lopez.jpg" },
      { name: "Chris Wong", title: "Moderator", photo: "/speakers/chris-wong.jpg" }
    ],
    detailsTitle: "The Event",
    detailsBody:
      "We’ll talk about AI tools, rapid prototyping, and how teams can adapt to faster design cycles.",
    previousEvents: [{ title: "Intro to Design Systems", year: 2024 }],
    faq: [
      {
        question: "Is there a dress code?",
        answer: "Casual or business casual is perfect."
      }
    ]
  }
};

module.exports = events;
