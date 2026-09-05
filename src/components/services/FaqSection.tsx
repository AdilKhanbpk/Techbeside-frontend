"use client";
import Link from "next/link";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 md:p-8 md:mt-16 mt-9 px-3">
      <h2 className="text-4xl font-bold text-indigo-600 mb-6">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* FAQ List */}
        <div className="md:col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg mb-4 bg-white shadow-sm">
              <button
                className="w-full p-4 flex justify-between items-center text-left font-semibold text-lg"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="text-xl font-bold text-indigo-600 ">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="p-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="bg-indigo-800 text-white p-6 rounded-lg flex flex-col justify-center items-center text-center">
          <span className="text-2xl mb-4">💬</span>
          <h3 className="text-xl font-bold mb-2">Do you have more questions?</h3>
          <p className="text-sm mb-4">Hit the button & tell us. We will try to answer your query.</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@techbeside.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg inline-block cursor-pointer relative z-10"
          >
            Shoot a Direct Mail
          </a>

        </div>
      </div>
    </div>
  );
};

export default FaqSection;
