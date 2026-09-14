import React from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import PricingForm from "./PricingForm";

const heroStats = [
  { label: "Pricing", value: "Transparent, no hidden fees" },
  { label: "Packages", value: "Flexible, built to scale" },
  { label: "Engagement", value: "Free initial consultation" },
];

const highlightSections = [
  {
    heading: "Affordable Solutions Without Sacrificing Quality",
    body: "Our pricing is structured to suit diverse business needs — from basic plans to premium solutions — so every client gets high-quality service, whether it's web development, digital marketing, or app development. We know every business has different requirements, which is why we offer flexible options that cater to different budgets, backed by a team committed to delivering results that add real value to your investment.",
    panelTitle: "What that looks like",
    highlights: [
      "Plans structured around your actual budget",
      "No compromise on code quality or process",
      "Dedicated senior engineers on every project",
    ],
  },
  {
    heading: "Flexible Packages for All Businesses",
    body: "We offer customizable pricing plans to align with your goals. Whether you need comprehensive solutions or specific services, our packages are built to scale with your business as it grows. You pay for what you need, with the option to upgrade or adjust as requirements evolve — across any budget or project size, with pricing that stays transparent and free of hidden fees.",
    panelTitle: "Built to scale",
    highlights: [
      "Scale services up or down as you grow",
      "Transparent quotes with zero hidden fees",
      "Packages matched to project size, not guesswork",
    ],
  },
  {
    heading: "Why Choose TechBeside for Your Next Project?",
    body: "With TechBeside, you get more than a service — you get a partner committed to your success. Our pricing reflects our dedication to delivering the best results while staying within your budget. We start by understanding your business goals, then deliver solutions that tackle the real challenges ahead, bringing expertise and innovation to every project, from web development to app development.",
    panelTitle: "What you can expect",
    highlights: [
      "An outcome-focused partnership, not a one-off job",
      "Proven expertise across industries and stacks",
      "Clear communication from kickoff to delivery",
    ],
  },
];

const PricingCards = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B0B14] text-white overflow-hidden">
        {/* Structural background — fine grid + soft indigo glow, no imagery */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.4), transparent)",
          }}
        />

        <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20 text-center">

          <h1 className="font-inter font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Pricing built around your outcome, not a template.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/70 leading-7 md:leading-8">
            We believe in clear, competitive pricing for every service we
            offer. Our packages are designed to deliver maximum value without
            compromising quality.
          </p>

          <Link
            href="#pricing-form"
            className="mt-8 inline-flex items-center gap-2 bg-[#6366F1] text-white text-base md:text-lg px-6 py-3 rounded-full hover:bg-[#4F46E5] shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)] transition-colors"
          >
            Share your requirements <FaArrowDown size={14} />
          </Link>

          <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-5xl mx-auto text-left sm:text-center">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-white/50">{stat.label}</dt>
                <dd className="mt-1 text-base md:text-lg font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 md:mb-16 mb-9 space-y-16 md:space-y-24">
        {highlightSections.map((section, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={section.heading}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            >
              <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
                  {section.heading}
                </h2>
                <p className="mt-5 text-base md:text-lg text-gray-700 leading-7 md:leading-8 max-w-2xl">
                  {section.body}
                </p>
              </div>

              <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                <div className="border border-gray-200 rounded-2xl p-8 bg-[#FAFAFF]">
                  <p className="text-sm font-medium text-[#6366F1]">
                    {section.panelTitle}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {section.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-700">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        {/* Pricing Form */}
        <div id="pricing-form">
          <PricingForm />
        </div>
      </div>
    </>
  );
};

export default PricingCards;