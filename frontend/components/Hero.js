import Image from "next/image";

export default function Hero({ event }) {
  const title = event?.title ?? "The BluePrint Series";
  const date = event?.date ?? "Date TBA";
  const location = event?.location ?? "Location TBA";

  return (
    <section
      id="tickets"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Keep a stable aspect on small screens, and exact height on desktop */}
      <div className="relative h-[640px] md:h-[900px] w-full">
        {/* Background Poster */}
        <Image
          src="/images/hero-background.png"
          alt={title}
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* Figma Blue Radial Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(110% 110% at 50% 60%, rgba(30,0,255,0) 0%, rgba(30,0,255,0.95) 100%)",
            opacity: 0.9,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="mx-auto w-full max-w-[1280px] px-4">
            {/* DATE */}
            <div className="mb-4 text-[14px] sm:text-[16px] md:text-[20px] font-semibold tracking-[0.15em] uppercase">
              {date}
            </div>

            {/* TITLE */}
            <h1 className="mx-auto mb-6 max-w-[714px] text-[40px] sm:text-[48px] md:text-[60px] leading-[1.05] font-semibold tracking-[-0.045em]">
              {title}
            </h1>

            {/* LOCATION */}
            <div className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold tracking-[0.15em] uppercase">
              {location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
