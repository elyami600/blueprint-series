// app/events/[id]/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import EventDetails from "@/components/EventDetails";
import PreviousEvents from "@/components/PreviousEvents";
import FAQ from "@/components/FAQ";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Footer from "@/components/Footer";
import eventAPI from "@/lib/api";

export default function EventPage() {
  const params = useParams();
  const id = params?.id ?? "1"; // defaults to event 1 if missing

  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);
  const [data, setData]     = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const eventData = await eventAPI.getEventData(id);
        setData(eventData);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error)   return <ErrorMessage message={error} />;
  if (!data)   return <ErrorMessage message="Event not found" />;

  const {
    event,
    introduction,
    agenda,
    speakers,
    eventDetails,
    previousEvents,
    faq,
  } = data;

  return (
    <main className="bg-white text-black">
      <NavBar />

      {/* Hero / Tickets section */}
      <section id="tickets">
        <Hero event={event} />
      </section>

      {/* INTRO SECTION */}
      <section id="intro">
        {/* introduction from API is { content: "..." } */}
        <Introduction content={introduction?.content || ""} />
      </section>

      {/* AGENDA SECTION */}
      <section id="agenda">
        {/* agenda from API is { items: [...] } */}
        <Agenda items={agenda?.items || []} />
      </section>

      {/* SPEAKERS SECTION */}
      <section id="speakers">
        {/* speakers from API is { speakers: [...] } */}
        <Speakers speakers={speakers?.speakers || []} />
      </section>

      {/* “THE EVENT” SECTION */}
      <section>
        {/* eventDetails from API is { content: "..." } */}
        <EventDetails
          content={eventDetails?.content || ""}
          mainImage={event.heroImage}                 // from eventsDB
          gallery={previousEvents?.events || []}      // array of previous events
        />
      </section>


      {/* FAQ SECTION */}
      <section>
        {/* faq from API is { questions: [...] } */}
        <FAQ questions={faq?.questions || []} />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
