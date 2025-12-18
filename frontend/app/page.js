import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventAPI from "@/lib/api";

export default async function HomePage() {
  let events = [];

  try {
    const res = await eventAPI.getAllEvents();

    // If API returns { success, data }, use res.data
    events = Array.isArray(res) ? res : (res?.data ?? []);
  } catch (error) {
    console.error("Error fetching events:", error);
    events = [];
  }

  return (
    <main className="bg-white text-black">
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 text-gray-900">
              Discover Amazing Events
            </h1>
            <p className="text-xl text-gray-600">Choose an event to explore</p>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">No events available</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h2 className="text-3xl font-bold mb-2">
                            {event.title}
                          </h2>
                          <p className="text-blue-100 text-lg mb-4">
                            {event.date}
                          </p>
                          <p className="text-white">{event.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">Location</p>
                          <p className="font-semibold text-gray-900">
                            {event.location}
                          </p>
                        </div>
                        <span className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ✅ Replace hardcoded /events/1 /events/2 with real MongoDB ids */}
              <div className="text-center mt-16">
                <div className="bg-white rounded-lg shadow-md p-8 inline-block">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Quick Links
                  </h3>
                  <div className="flex gap-4 justify-center flex-wrap">
                    {events.map((event) => (
                      <Link
                        key={event.id}
                        href={`/events/${event.id}`}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                      >
                        {event.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
