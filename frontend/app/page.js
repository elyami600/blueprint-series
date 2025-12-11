// // app/page.jsx
'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import eventAPI from '@/lib/api';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventAPI.getAllEvents();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
         setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

    if (loading) return <Loading />;
    if (error)   return <ErrorMessage message={error} />;

  return (
    <>
      <Head>
        <title>Event Website - Home</title>
        <meta name="description" content="Discover upcoming events" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 text-gray-900">
              Discover Amazing Events
            </h1>
            <p className="text-xl text-gray-600">
              Choose an event to explore
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : (
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
                        <p className="text-white">
                          {event.description}
                        </p>
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
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        <div className="text-center mt-16">
        <div className="bg-white rounded-lg shadow-md p-8 inline-block">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Upcoming Events
          </h3>
          <div className="flex gap-4 justify-center">
            {
              events.map((event) => (
                <Link
                  key={event.id} 
                  href={`/events/${event.id}`} 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {event.name || `Event ${event.id}:   ${event.title}`}
                </Link>
              ))}

          </div>
        </div>
        </div>

        </div>
      </div>
    </>
  );
}
