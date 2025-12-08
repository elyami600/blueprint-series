"use client";

const sections = [
  { id: "intro", label: "INTRO" },
  { id: "agenda", label: "AGENDA" },
  { id: "speakers", label: "SPEAKERS" },
];

export default function NavBar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-[0_1px_22px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[80px] px-6">
        {/* Logo text */}
        <div className="leading-tight">
          <div className="text-xs tracking-[0.2em] uppercase">The</div>
          <div className="text-4xl md:text-[44px] font-bold">
            BluePrint Series
          </div>
        </div>

        {/* Right side nav */}
        <div className="flex items-center gap-12 text-[14px] font-semibold tracking-[0.15em]">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="uppercase text-black hover:opacity-60 transition"
            >
              {item.label}
            </button>
          ))}

          {/* Get tickets */}
          <button
            onClick={() => handleScroll("intro")}
            className="relative uppercase text-black pl-6 pr-10 h-10 flex items-center"
          >
            <span className="absolute left-0 top-0 bottom-0 border-l border-black" />
            <span className="relative">GET TICKETS</span>
            <span className="absolute right-0 bottom-0 left-0 border-b border-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
