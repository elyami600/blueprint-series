// components/Speakers.jsx

export default function Speakers({ speakers = [] }) {
  // FORCE exactly 3 speakers
  const visibleSpeakers = speakers.slice(0, 3);

  return (
    <section id="speakers" className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Title */}
        <h2 className="mb-20 text-[56px] md:text-[96px] lg:text-[112px] font-semibold tracking-[-0.085em] text-center">
          Speakers
        </h2>

        {/* 3-columns exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-16">

          {visibleSpeakers.map((speaker, index) => (
            <div key={index} className="text-center">

              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[294px] lg:h-[294px] rounded-full overflow-hidden mb-6">
                <img
                  src={speaker.image || "/speaker-default.png"}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Name */}
              <p className="text-[24px] font-medium tracking-[-0.02em] mb-1">
                {speaker.name}
              </p>

              {/* Title */}
              <p className="text-[16px] lg:text-[20px] uppercase tracking-[0.15em] text-[#6D6D6D] opacity-50">
                {speaker.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
