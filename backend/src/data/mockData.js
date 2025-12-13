// backend/data/mockData.js
const eventsDB = {
  1: {
    id: 1,
    title: "Tech Innovation Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Silicon Valley Convention Center",
    address: "123 Tech Drive, San Jose, CA 95110",
    description: "Join industry leaders for a day of innovation and networking",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  },
  2: {
    id: 2,
    title: "Digital Marketing Expo 2025",
    date: "April 22, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Downtown Conference Hall",
    address: "456 Marketing Avenue, New York, NY 10001",
    description:
      "Discover the latest trends in digital marketing and social media",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  },
};

const introductionsDB = {
  1: {
    content:
      "Welcome to the Tech Innovation Summit 2025, where visionaries, entrepreneurs, and technology leaders converge to explore the future of digital transformation. This year's summit focuses on artificial intelligence, sustainable technology, and the evolving landscape of remote collaboration. Prepare for an immersive experience featuring keynote speeches, interactive workshops, and unparalleled networking opportunities.",
  },
  2: {
    content:
      "The Digital Marketing Expo is your gateway to mastering the digital landscape. Connect with marketing professionals, explore cutting-edge tools, and learn strategies that drive real results. From SEO to social media advertising, content marketing to analytics, this expo covers everything you need to stay ahead in the competitive digital world.",
  },
};

const agendasDB = {
  1: {
    items: [
      {
        time: "9:00 AM",
        title: "Registration & Welcome Coffee",
        description: "Check-in and networking",
      },
      {
        time: "10:00 AM",
        title: "Opening Keynote",
        description: "The Future of AI in Business",
      },
      {
        time: "11:30 AM",
        title: "Panel Discussion",
        description: "Sustainable Tech Innovation",
      },
      {
        time: "1:00 PM",
        title: "Lunch & Networking",
        description: "Catered lunch with networking sessions",
      },
      {
        time: "2:30 PM",
        title: "Workshop Sessions",
        description: "Hands-on technical workshops",
      },
      {
        time: "4:00 PM",
        title: "Closing Remarks",
        description: "Summary and future outlook",
      },
    ],
  },
  2: {
    items: [
      {
        time: "10:00 AM",
        title: "Registration & Morning Coffee",
        description: "Welcome and check-in",
      },
      {
        time: "10:30 AM",
        title: "Keynote: Future of Marketing",
        description: "Digital trends for 2025",
      },
      {
        time: "12:00 PM",
        title: "SEO Masterclass",
        description: "Advanced SEO strategies",
      },
      {
        time: "1:30 PM",
        title: "Networking Lunch",
        description: "Connect with industry peers",
      },
      {
        time: "3:00 PM",
        title: "Social Media Workshop",
        description: "Maximizing engagement",
      },
      {
        time: "5:00 PM",
        title: "Closing & Giveaways",
        description: "Prizes and networking",
      },
    ],
  },
};

const speakersDB = {
  1: {
    speakers: [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Chief AI Officer, TechCorp",
        bio: "Leading AI researcher with 15+ years experience",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      },
      {
        id: 2,
        name: "Marcus Rodriguez",
        title: "CEO, GreenTech Solutions",
        bio: "Sustainability advocate and tech entrepreneur",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      },
      {
        id: 3,
        name: "Emily Watson",
        title: "VP of Innovation, CloudSystems",
        bio: "Cloud architecture expert and keynote speaker",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      },
    ],
  },
  2: {
    speakers: [
      {
        id: 1,
        name: "Jessica Park",
        title: "Head of Marketing, BrandMax",
        bio: "Award-winning marketer and social media strategist",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        id: 2,
        name: "David Kim",
        title: "SEO Director, SearchPro",
        bio: "SEO expert with 10+ years optimizing Fortune 500 sites",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        id: 3,
        name: "Rachel Torres",
        title: "Content Strategist, MediaLab",
        bio: "Content marketing specialist and bestselling author",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
    ],
  },
};

const detailsDB = {
  1: {
    content:
      "The Tech Innovation Summit brings together over 500 attendees from across the globe. Our carefully curated program features cutting-edge presentations on emerging technologies, interactive breakout sessions, and exclusive access to industry pioneers. Attendees will gain actionable insights into AI implementation, learn sustainable technology practices, and discover strategies for digital transformation. The event includes comprehensive materials, catered meals, and access to our exclusive networking platform.",
  },
  2: {
    content:
      "The Digital Marketing Expo attracts 400+ marketing professionals seeking to elevate their digital strategies. Experience hands-on workshops, live demonstrations of the latest marketing tools, and networking sessions with industry leaders. Learn proven tactics for increasing ROI, building brand awareness, and engaging your target audience. All attendees receive exclusive access to premium marketing resources, templates, and a year-long membership to our online learning platform.",
  },
};

const previousEventsDB = {
  1: {
    events: [
      {
        id: 1,
        title: "Tech Innovation Summit 2024",
        date: "March 2024",
        attendees: 450,
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        highlight: "Featured 25+ speakers and 300+ companies",
      },
      {
        id: 2,
        title: "AI & Future Work Conference",
        date: "September 2023",
        attendees: 380,
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
        highlight: "Groundbreaking AI demonstrations and workshops",
      },
      {
        id: 3,
        title: "Digital Transformation Expo",
        date: "June 2023",
        attendees: 520,
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
        highlight: "Largest gathering of tech leaders in the region",
      },
    ],
  },
  2: {
    events: [
      {
        id: 1,
        title: "Digital Marketing Expo 2024",
        date: "April 2024",
        attendees: 400,
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
        highlight: "200+ marketing professionals networked",
      },
      {
        id: 2,
        title: "Social Media Summit 2023",
        date: "November 2023",
        attendees: 350,
        image:
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop",
        highlight: "Top influencers shared success strategies",
      },
      {
        id: 3,
        title: "Content Marketing Conference",
        date: "August 2023",
        attendees: 300,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
        highlight: "Hands-on content creation workshops",
      },
    ],
  },
};

const faqDB = {
  1: {
    questions: [
      {
        id: 1,
        question: "What is included in the ticket price?",
        answer:
          "Your ticket includes full access to all sessions, keynotes, and workshops, catered lunch and refreshments, conference materials, networking events, and access to our event app.",
      },
      {
        id: 2,
        question: "Is there parking available?",
        answer:
          "Yes, complimentary parking is available at the convention center. We also recommend using rideshare services or public transportation.",
      },
      {
        id: 3,
        question: "Can I get a refund if I cannot attend?",
        answer:
          "Full refunds are available up to 14 days before the event. After that, tickets can be transferred to another person with notification to our team.",
      },
      {
        id: 4,
        question: "Will sessions be recorded?",
        answer:
          "Yes, all main stage sessions will be recorded and made available to attendees within 48 hours after the event.",
      },
      {
        id: 5,
        question: "What is the dress code?",
        answer:
          "Business casual attire is recommended. The venue is climate-controlled for your comfort.",
      },
    ],
  },
  2: {
    questions: [
      {
        id: 1,
        question: "Who should attend this expo?",
        answer:
          "Marketing professionals, business owners, content creators, social media managers, and anyone interested in improving their digital marketing skills.",
      },
      {
        id: 2,
        question: "Are the workshops beginner-friendly?",
        answer:
          "Yes! We offer sessions for all skill levels, from beginners to advanced marketers. Each session is clearly labeled with difficulty level.",
      },
      {
        id: 3,
        question: "Will I receive a certificate?",
        answer:
          "All attendees receive a certificate of completion and can earn continuing education credits for select sessions.",
      },
      {
        id: 4,
        question: "Can I bring my team?",
        answer:
          "Absolutely! We offer group discounts for teams of 3 or more. Contact our team for special pricing.",
      },
      {
        id: 5,
        question: "What materials will I receive?",
        answer:
          "You'll receive a welcome kit, workshop materials, access to presentation slides, and exclusive marketing templates and tools.",
      },
    ],
  },
};


module.exports = {
  eventsDB,
  introductionsDB,
  agendasDB,
  speakersDB,
  detailsDB,
  previousEventsDB,
  faqDB,
};
