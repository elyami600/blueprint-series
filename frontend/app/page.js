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

// Always load EVENT #1
async function getEvent() {
  const res = await fetch("http://localhost:4000/api/events/1", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch event");

  return res.json();
}

export default async function HomePage() {
  let event;
  try {
    event = await getEvent();
  } catch (e) {
    return <ErrorMessage message={e.message} />;
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
        <Agenda items={event.agenda} />
      </section>

      {/* Speakers */}
      <section id="speakers">
        <Speakers speakers={event.speakers} />
      </section>

      {/* Details */}
      <EventDetails content={event.details} />

      {/* FAQ */}
      <FAQ questions={event.faq} />

      <Footer />
    </main>
  );
}
