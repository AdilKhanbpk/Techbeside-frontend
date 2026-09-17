import React from "react";

const stats = [
  { label: "Founded", value: "Building since 2019" },
  { label: "Delivery", value: "120+ projects shipped" },
  { label: "Team", value: "25+ engineers & designers" },
];

const AboutHeroSection: React.FC = () => {
  return (
    <section
      aria-label="About TechBeside introduction"
      className="relative bg-[#0B0B14] text-white overflow-hidden"
    >
      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Soft indigo glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.30), transparent)",
        }}
      />

      <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.04em] max-w-5xl mx-auto">
          Together, we build what your business needs next.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-xl text-white/60 leading-8 md:leading-9">
          We&apos;re a software company that pairs careful engineering with a
          genuine stake in your outcome — from the first prototype to the
          systems that run your business.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center">

          <a href="/contact"
            className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-indigo-500 transition-colors text-white text-lg md:text-xl font-medium py-4 px-10 rounded-full shadow-[0_0_40px_-6px_#6366F1]"
          >
            Work with us
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stat row */}
        <dl className="mt-10 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10 max-w-6xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-base text-white/45">{stat.label}</dt>
              <dd className="mt-2 text-xl md:text-2xl font-bold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutHeroSection;