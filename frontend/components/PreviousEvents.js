// components/PreviousEvents.jsx
export default function PreviousEvents({ events = [] }) {
  return (
    <div className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-[48px] md:text-[60px] font-bold text-center mb-4">
          The BluePrint Series
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Previous events from the BluePrint Series
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-40 bg-gray-200" />{/* placeholder image */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{ev.title}</h3>
                <p className="text-sm text-gray-600">{ev.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
