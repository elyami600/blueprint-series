// app/events/[id]/page.js
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


async function getEvent(id) {
  const res = await fetch(`http://localhost:4000/api/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch event ${id}: ${res.status}`);
  }

  return res.json();
}

// Next 15 passes params as a Promise – unwrap it
export default async function EventPage({ params }) {
  const { id = "1" } = await params;

  let event;
  try {
    event = await getEvent(id);
  } catch (e) {
    return <ErrorMessage message={e.message} />;
  }

  if (!event) return <Loading />;

  return (
    <main className="bg-white text-black">
      <NavBar />

      {/* Hero / Tickets section */}
      <section id="tickets">
        <Hero event={event} />
      </section>

      {/* INTRO SECTION */}
      <section id="intro">
        <Introduction content={event.introduction} />
      </section>

      {/* AGENDA SECTION */}
      <section id="agenda">
        <Agenda items={event.agenda || []} />
      </section>

      {/* SPEAKERS SECTION */}
      <section id="speakers">
        <Speakers speakers={event.speakers || []} />
      </section>

      {/* “THE EVENT” SECTION – uses `details` from events.js */}
      <section>
       <EventDetails content={event.details || ""} mainImage={event.eventMainImage} gallery={event.previousEventImages || []} />

      </section>

      {/* FAQ SECTION */}
      <section>
        <FAQ questions={event.faq || []} />
      </section>

      {/* FOOTER LIKE FIGMA */}
      <Footer />
    </main>
  );
}
