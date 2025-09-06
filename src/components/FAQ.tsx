"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end web design, development, branding, and SEO services tailored to startups and businesses.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically 2-4 weeks depending on complexity. We also offer express delivery options.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer affordable monthly maintenance and updates packages after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in modernizing outdated websites with fresh UX/UI and tech stacks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-sm"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-600" />
                ) : (
                  <Plus className="text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
