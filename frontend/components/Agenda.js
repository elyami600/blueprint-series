// components/Agenda.jsx
export default function Agenda({ items = [] }) {
  const defaultDescription =
    "Join us for an exclusive evening with Rich Tu, the award-winning designer behind the official NY/NJ 2026 FIFA World Cup poster.";
  const defaultLocation = "GROUND FLOOR";
  
  // Use a standard max-width class for better consistency across components
  const MAX_WIDTH_CLASS = 'max-w-6xl'; 

  return (
    <section id="agenda" className="bg-white py-24 md:py-32">
      {/* Container now uses standard responsive padding */}
      <div className={`${MAX_WIDTH_CLASS} mx-auto px-4 sm:px-6 lg:px-8`}>
        
        {/* Big title like Figma */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-[56px] md:text-[96px] lg:text-[112px] leading-[1] font-semibold tracking-[-0.085em] text-center">
            Agenda
          </h2>
        </div>

        {/* Day pills row (visual only, like Figma “day one / day two / day three”) */}
        {/* <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex gap-4 text-base md:text-lg lg:text-xl font-normal">
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em] opacity-100 ">
              day one
            </span>
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em] opacity-60">
              day two
            </span>
            <span className="px-4 py-1 uppercase font-mono tracking-[0.15em] opacity-60">
              day three
            </span>
          </div>
        </div> */}

        {/* Items Grid/List */}
        <div className="flex flex-col gap-10 md:gap-12">
          {items.map((item, i) => (
            // Use a grid layout for better alignment of the three columns (time, description, location)
            <div
              key={i}
              // Define a responsive grid system: single column on mobile, 3-column layout on medium screens
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[400px_1fr_max-content] items-start gap-4 md:gap-8"
            >
              
              {/* Left: time + title with vertical bar */}
              <div className="flex items-start gap-4">
                <div className="w-[4px] h-16 bg-black flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <div className="text-base md:text-lg font-normal uppercase tracking-[0.15em]">
                    {item.time}
                  </div>
                  <div className="text-base md:text-lg font-normal uppercase tracking-[0.15em]">
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Middle: description */}
              <p className="text-base md:text-lg leading-relaxed text-black/90">
                {item.description || defaultDescription}
              </p>

              {/* Right: location */}
              {/* Added flex-shrink-0 to prevent location text from wrapping prematurely */}
              <div className="md:text-lg lg:text-xl uppercase tracking-[0.15em] text-black/90 md:text-right flex-shrink-0">
                {item.location || defaultLocation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
