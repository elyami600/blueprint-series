// components/EventDetails.jsx
export default function EventDetails({ content, mainImage, gallery = [] }) {
  // Fallback collage images if none are passed from the API
  const collage = [
    gallery[0] ||
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    gallery[1] ||
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop",
    gallery[2] ||
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1156px] mx-auto px-4 flex flex-col gap-16">
        {/* BIG TITLE – “The Event” */}
        <div className="h-[112px] flex items-center justify-center">
          <h2 className="text-[56px] md:text-[112px] leading-[112px] font-semibold tracking-[-0.085em] text-black">
            The Event
          </h2>
        </div>

        {/* TWO-COLUMN BLOCK */}
        <div className="flex flex-col md:flex-row gap-[86px]">
          {/* LEFT – INTRODUCTION OF THIS EVENT */}
          <div className="flex-1 max-w-[535px]">
            <div className="flex items-start gap-3 mb-6">
              {/* black square bullet */}
              <div className="w-3 h-3 mt-[6px] bg-black" />
              <h3 className="font-mono text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
                Introduction of this event
              </h3>
            </div>

            <p className="text-[18px] md:text-[24px] leading-[34px] text-black">
              {content}
            </p>
          </div>

          {/* RIGHT – OUR PAST EVENTS + TALL IMAGE */}
          <div className="flex-1 max-w-[535px]">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-3 h-3 mt-[6px] bg-black" />
              <h3 className="font-mono text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
                Our past events
              </h3>
            </div>

            <div className="w-[453px] max-w-full h-[679px] overflow-hidden">
              <img
                src={
                  mainImage ||
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop"
                }
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* COLLAGE – THREE TILTED IMAGES AT THE BOTTOM */}
        <div className="relative w-full h-[340px] mt-4">
          {/* left image */}
          <div className="absolute left-[22px] top-[40px] w-[280px] h-[210px] rounded-md overflow-hidden shadow-lg -rotate-6">
            <img
              src={collage[0]}
              alt="Previous event 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* center image */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[300px] h-[220px] rounded-md overflow-hidden shadow-lg rotate-2">
            <img
              src={collage[1]}
              alt="Previous event 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* right image */}
          <div className="absolute right-[22px] top-[55px] w-[290px] h-[215px] rounded-md overflow-hidden shadow-lg rotate-6">
            <img
              src={collage[2]}
              alt="Previous event 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
