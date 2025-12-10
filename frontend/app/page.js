// app/page.jsx
import React from "react";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import EventDetails from "@/components/EventDetails";
import FAQ from "@/components/FAQ";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Footer from "@/components/Footer";

// ✅ 1) Configurable API base (works locally and in prod)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

// ✅ 2) Optional fallback event if API is down (so page still shows something)
const FALLBACK_EVENT = {
  title: "The Blueprint Series: Fireside Chat with Rich Tu",
  date: "March 20, 2025",
  location: "New York, NY",
  introduction:
    "Join us for a live conversation with Rich Tu as we discuss creative careers, identity, and navigating the design world.",
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
  faq: [
    {
      question: "Is this event free?",
      answer: "Yes, this event is free with RSVP.",
    },
  ],
};

// Fetch EVENT #1 from backend
async function getEvent() {
  const res = await fetch(`${API_BASE_URL}/api/events/1`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch event: ${res.status}`);
  return res.json();
}

export default async function HomePage() {
  let event;

  try {
    event = await getEvent();
  } catch (e) {
    console.error("API error, using fallback event:", e);
    // ✅ Use fallback instead of breaking the page
    event = FALLBACK_EVENT;
    // Or if you prefer to show an error instead, you could:
    // return <ErrorMessage message={e.message} />;
  }

  if (!event) return <Loading />;

  return (
    <main className="bg-white text-black">
      <NavBar />

      {/* Hero */}
      <section id="tickets">
        <Hero event={event} />
      </section>

      {/* Intro */}
      <section id="intro">
        <Introduction content={event.introduction} />
      </section>

      {/* Agenda */}
      <section id="agenda">
        <Agenda items={event.agenda || []} />
      </section>

      {/* Speakers */}
      <section id="speakers">
        <Speakers speakers={event.speakers || []} />
      </section>

      {/* Details */}
      <section id="details">
        <EventDetails content={event.details || ""} />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ questions={event.faq || []} />
      </section>

      <Footer />
    </main>
  );
}
