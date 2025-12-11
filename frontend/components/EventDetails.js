// components/EventDetails.jsx

/**
 * props:
 *  - details: string (from detailsDB[id].content)
 *  - previousEvents: array of events (from previousEventsDB[id].events)
 */
export default function EventDetails({ details, previousEvents = [] }) {
  const mainImage = previousEvents[0];
  const leftImage = previousEvents[1] || mainImage;
  const rightImage = previousEvents[2] || mainImage;

  return (
    <section className="bg-white py-24">
      <div className="relative mx-auto flex max-w-[1156px] flex-col gap-[60px] px-4">
        {/* Top title row (1156 × 112) */}
        <div className="h-[112px] w-full">
          <div className="relative h-full w-full">
            <h2
              className="
                absolute left-1/2 top-0 flex h-[112px] w-[472px]
                -translate-x-1/2 items-center justify-center
                text-[72px] md:text-[96px] lg:text-[112px]
                leading-[112px] font-semibold tracking-[-0.075em] text-black
              "
            >
              The Event
            </h2>
          </div>
        </div>


        <div className="flex w-full max-w-[1070px] flex-col gap-[40px] md:flex-row md:gap-[86px]">
          <div className="flex w-full max-w-[535px] flex-col gap-[20px]">
            <div className="relative h-[24px] w-[413px]">
              <span className="absolute left-0 top-[6px] h-[12px] w-[12px] bg-black" />
              <span
                className="
                  absolute left-[22.5px] top-0 flex h-[24px] w-[391px]
                  items-center
                  font-mono text-[24px] leading-[24px] uppercase
                "
              >
                introduction of this event
              </span>
            </div>

            <div className="w-[535px]">
              <p className="flex h-auto w-full items-center font-sans text-[24px] leading-[34px] text-black">
                {details ||
                  "Presented as part of The Gradient's Blueprint Series, this fireside chat—moderated by Love Malone, CEO of The Gradient—will dive into Rich's creative journey, his thoughts on where the industry is headed, and how design continues to shape identity, storytelling, and the future of culture."}
              </p>
            </div>
          </div>

          {/* RIGHT – OUR PAST EVENTS (535 × 743) */}
          <div className="relative w-full max-w-[535px]">
            {/* label row */}
            <div className="relative mb-[20px] h-[24px] w-[289px]">
              <span className="absolute left-0 top-[6px] h-[12px] w-[12px] bg-black" />
              <span
                className="
                  absolute left-[22.5px] top-0 flex h-[24px] w-[300px]
                  items-center
                  font-mono text-[24px] leading-[24px] uppercase
                "
              >
                our past events
              </span>
            </div>

            {/* tall image – 453 × 679 inside 535 × 699 frame */}
            <div className="relative h-[699px] w-[535px]">
              <img
                src={
                  mainImage?.image ||
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop"
                }
                alt={mainImage?.title || "Past events"}
                className="absolute left-0 top-0 h-[679px] w-[453px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom collage (1156 × 425) */}
        <div className="relative h-[425px] w-full max-w-[1156px]">
          {/* left image – 439 × 326 at (22, 38.98) */}
          <div className="absolute left-[22px] top-[38.98px] h-[326px] w-[439px] overflow-hidden">
            <img
              src={
                leftImage?.image ||
                "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
              }
              alt={leftImage?.title || "Previous event 1"}
              className="h-full w-full object-cover"
            />
          </div>

          {/* center image – 472 × 344.68 at (330.44, 14) */}
          <div className="absolute left-[330.44px] top-[14px] h-[344.68px] w-[472px] overflow-hidden">
            <img
              src={
                mainImage?.image ||
                "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
              }
              alt={mainImage?.title || "Previous event 2"}
              className="h-full w-full object-cover"
            />
          </div>

          {/* right image – 423 × 319.88 at (733, 52.56) */}
          <div className="absolute left-[733px] top-[52.56px] h-[319.88px] w-[423px] overflow-hidden">
            <img
              src={
                rightImage?.image ||
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
              }
              alt={rightImage?.title || "Previous event 3"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
