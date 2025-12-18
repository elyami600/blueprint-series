import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import EventDetails from "@/components/EventDetails";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ErrorMessage from "@/components/ErrorMessage";
import eventAPI from "@/lib/api";

export default async function EventPage({ params }) {
 const { id } = await params; //

  if (!id) return <ErrorMessage message="Missing event id" />;

  try {
    const res = await eventAPI.getCompleteEvent(id);
    const event = res?.data ?? res;

    if (!event) return <ErrorMessage message="Event not found" />;

    return (
      <main className="bg-white text-black">
        <NavBar />

        <section id="tickets">
          <Hero event={event} />
        </section>

        <section id="intro">
          <Introduction content={event.introduction || ""} />
        </section>

        <section id="agenda">
          <Agenda items={event.agenda || []} />
        </section>

        <section id="speakers">
          <Speakers speakers={event.speakers || []} />
        </section>

        <section id="details">
          <EventDetails
            content={event.details || ""}
            pastEventsImage={event.pastEventsImage}
          />
        </section>

        <section id="faq">
          <FAQ questions={event.faq || []} />
        </section>

        <Footer />
      </main>
    );
  } catch (err) {
    return <ErrorMessage message={err?.message || "Failed to load event"} />;
  }
}
