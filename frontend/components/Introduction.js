// components/Introduction.jsx
export default function Introduction({ content }) {
    console.log("Introduction content:", content);
  return (
    <section id="intro" className="bg-white py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1064px] flex flex-col gap-5">

          {/* Heading row: square bullet + mono text */}
          <div className="flex items-center gap-4">
            {/* black square bullet */}
            <div className="w-3 h-3 bg-black" />

            <p className="text-[24px] md:text-[32px] leading-[24px] font-normal uppercase tracking-[0.25em] font-mono">
              introduction of this event
            </p>
          </div>

          {/* Body text */}
          <p className="text-[24px] md:text-[32px] leading-[40px] text-black">
            {content || "Event introduction coming soon."}
          </p>
        </div>
      </div>
    </section>
  );
}
