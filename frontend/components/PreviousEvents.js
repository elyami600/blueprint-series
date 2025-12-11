
// components/PreviousEvents.js
import Image from 'next/image';

export default function PreviousEvents({ events }) {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 text-center">
          The BluePrint Series
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our previous events and see what makes the BluePrint Series special
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">{event.attendees}</span> attendees
                </p>
                <p className="text-sm text-gray-600">{event.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}