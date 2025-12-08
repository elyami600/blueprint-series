// components/Hero.jsx
import Image from "next/image";

export default function Hero({ event }) {
  return (
    <section
      id="tickets"
      className="relative h-[900px] w-full overflow-hidden"
    >
      {/* Background Poster */}
      <Image
        src="/images/hero-background.png"
        alt={event.title}
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Figma Blue Radial Overlay */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(110%_110%_at_50%_60%,rgba(30,0,255,0)_0%,rgba(30,0,255,0.95)_100%)]
        "
        style={{ opacity: 0.9 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-[1280px] px-4">
          
          {/* DATE */}
          <div className="mb-4 text-[20px] font-semibold tracking-[0.15em] uppercase">
            {event.date}
          </div>

          {/* TITLE */}
          <h1 className="mx-auto mb-6 max-w-[714px] text-[40px] md:text-[60px] leading-[58px] font-semibold tracking-[-0.045em]">
            {event.title}
          </h1>

          {/* LOCATION */}
          <div className="text-[20px] font-semibold tracking-[0.15em] uppercase">
            {event.location}
          </div>
        </div>
      </div>
    </section>
  );
}
