"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "intro", label: "INTRO" },
  { id: "agenda", label: "AGENDA" },
  { id: "speakers", label: "SPEAKERS" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-[0_1px_22px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-4 sm:px-6 lg:px-8">
        <div className="leading-tight flex-shrink-0">
          <div className="text-xs tracking-[0.2em] uppercase">The</div>
          <div className="text-3xl md:text-[44px] font-bold">BluePrint Series</div>
        </div>

        <nav className="hidden md:flex items-center gap-12 text-[14px] font-semibold tracking-[0.15em]">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="uppercase text-black hover:opacity-60 transition"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleScroll("intro")}
            aria-label="Get tickets (desktop)"
            className="relative uppercase text-black pl-6 pr-10 h-10 flex items-center flex-shrink-0"
          >
            <span className="absolute left-0 top-0 bottom-0 border-l border-black" />
            <span className="relative">GET TICKETS</span>
            <span className="absolute right-0 bottom-0 left-0 border-b border-black" />
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="text-black hover:opacity-60 transition p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-white shadow-lg absolute top-[80px] left-0 right-0 border-t border-gray-100"
        >
          <div className="flex flex-col p-4 space-y-4">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="uppercase text-left py-2 font-semibold text-black hover:bg-gray-100 px-2 rounded-md transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleScroll("intro")}
              aria-label="Get tickets (mobile)"
              className="mt-4 w-full text-center relative uppercase text-black py-2 font-semibold border border-black rounded-md hover:bg-gray-100 transition"
            >
              GET TICKETS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
