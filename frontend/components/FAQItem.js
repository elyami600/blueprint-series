// components/FAQItem.jsx
"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[63px] flex items-center justify-between text-left px-0 transition-colors"
      >
        <span className="text-[16px] leading-6 font-normal text-[#111111] uppercase">
          {question}
        </span>

        <div className="flex-shrink-0 w-[30px] h-[31px] flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-black" />
          ) : (
            <Plus className="w-4 h-4 text-black" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="pt-2 pb-6 text-base leading-relaxed text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}
