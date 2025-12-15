require("dotenv").config({ path: "../.env" });

const connectDB = require("./config/db");
const Event = require("./models/Event");

// import your existing mock data (use whichever file you want as source)
const { eventsDB, introductionsDB, agendasDB, speakersDB, detailsDB, previousEventsDB, faqDB } =
  require("./data/mockData");

(async () => {
  await connectDB();

  const ids = Object.keys(eventsDB);

  const docs = ids.map((id) => ({
    eventId: String(id),
    ...eventsDB[id],
    introduction: introductionsDB[id]?.content || "",
    agenda: agendasDB[id]?.items || [],
    speakers: speakersDB[id]?.speakers || [],
    details: detailsDB[id]?.content || "",
    previousEvents: previousEventsDB[id]?.events || [],
    faq: faqDB[id]?.questions || [],
  }));

  await Event.deleteMany({});
  await Event.insertMany(docs);

  console.log("✅ Seed complete");
  process.exit(0);
})();
