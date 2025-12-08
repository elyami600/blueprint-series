// components/FAQ.jsx
import FAQItem from "./FAQItem";

export default function FAQ({ questions = [] }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1156px] mx-auto px-4 flex flex-col gap-8">
        {/* Left title block */}
        <div className="h-[112px]">
          <h2
            className="
              text-[112px] leading-[112px]
              font-semibold
              tracking-[-0.085em]
              text-black
            "
          >
            FAQ
          </h2>
        </div>

        {/* Rows block */}
        <div className="w-full border-t border-b border-black/10">
          {questions.map((item, idx) => (
            <FAQItem
              key={item.id ?? idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
