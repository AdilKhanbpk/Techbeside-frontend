
"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: FAQ[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f9fc] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-indigo-600"></span>
            <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
            Find answers to the most common questions. If you still need
            help, our team is always happy to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border-b border-gray-200 last:border-b-0 transition-colors ${isOpen ? "bg-indigo-50/40" : "bg-white"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                      className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-6 text-left"
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className={`hidden sm:block text-sm font-semibold mt-1 ${isOpen ? "text-indigo-600" : "text-gray-400"
                            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`text-base md:text-lg font-semibold leading-relaxed transition-colors ${isOpen ? "text-indigo-700" : "text-gray-900"
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl transition-all ${isOpen
                          ? "bg-indigo-600 border-indigo-600 text-white rotate-180"
                          : "bg-white border-gray-300 text-gray-600"
                          }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 md:px-8 pb-7 pl-6 sm:pl-[4.75rem] pr-12 text-gray-600 leading-7 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:sticky lg:top-8 pt-12">
            <div className="relative overflow-hidden rounded-2xl bg-indigo-950 p-7 md:p-8 text-white shadow-[0_15px_40px_rgba(30,27,75,0.15)]">

              {/* Decorative element */}
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full border-[25px] border-indigo-900/60" />
              <div className="absolute -right-8 -bottom-20 w-36 h-36 rounded-full border-[20px] border-indigo-900/40" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-7">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.5C21 16.194 16.747 20 11.5 20C10.209 20 8.974 19.766 7.85 19.34L3 21L4.65 16.55C3.61 15.15 3 13.43 3 11.5C3 6.806 6.806 3 11.5 3C16.747 3 21 6.806 21 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-indigo-300 text-sm font-semibold uppercase tracking-widest mb-3">
                  Still have questions?
                </p>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Let&apos;s talk about it.
                </h3>

                <p className="text-indigo-100/70 leading-7 text-sm mb-8">
                  Can&apos;t find what you&apos;re looking for? Send us a
                  message and we&apos;ll get back to you as soon as possible.
                </p>

                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-between bg-white text-indigo-950 font-semibold px-5 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200"
                >
                  <span>Contact our team</span>

                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                <div className="mt-6 flex items-center gap-2 text-xs text-indigo-200/60">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  We&apos;re here to help
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
