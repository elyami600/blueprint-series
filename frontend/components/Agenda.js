// components/Agenda.jsx

export default function Agenda({ items = [] }) {
  // optional default description/location if not in data
  const defaultDescription =
    "Join us for an exclusive evening with Rich Tu, the award-winning designer behind the official NY/NJ 2026 FIFA World Cup poster.";
  const defaultLocation = "GROUND FLOOR";

  return (
    <section id="agenda" className="bg-white py-24 md:py-28">
      <div className="max-w-[1281px] mx-auto px-4">
        {/* Big title like Figma */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-[56px] md:text-[96px] lg:text-[112px] leading-[1] font-semibold tracking-[-0.085em] text-center">
            Agenda
          </h2>
        </div>

        {/* Day pills row (visual only, like Figma “day one / day two / day three”) */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex gap-4 text-[18px] md:text-[20px] font-normal">
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em]">
              day one
            </span>
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em] opacity-60">
              day two
            </span>
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em] opacity-60">
              day three
            </span>
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-10 md:gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-start md:gap-10"
            >
              {/* Left: time + title with vertical bar */}
              <div className="flex items-start gap-4 md:w-[404px] mb-4 md:mb-0">
                <div className="w-[4px] h-16 bg-black" />
                <div className="flex flex-col gap-1">
                  <div className="text-[18px] md:text-[20px] font-normal uppercase tracking-[0.15em]">
                    {item.time}
                  </div>
                  <div className="text-[18px] md:text-[20px] font-normal uppercase tracking-[0.15em]">
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Middle: description */}
              <p className="md:w-[416px] text-[18px] md:text-[20px] leading-[1.2] text-black/90 mb-4 md:mb-0">
                {item.description || defaultDescription}
              </p>

              {/* Right: location */}
              <div className="md:ml-auto text-[18px] md:text-[24px] uppercase tracking-[0.15em] text-black/90">
                {item.location || defaultLocation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
