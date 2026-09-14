import React from "react";

const stats = [
  { label: "Founded", value: "2019" },
  { label: "Projects delivered", value: "120+" },
  { label: "Industries served", value: "8" },
  { label: "Team members", value: "25+" },
];

const AboutHeroSection: React.FC = () => {
  return (
    <section
      aria-label="About TechBeside introduction"
      className="relative bg-[#0B0B14] text-white overflow-hidden"
    >
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
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.45), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-5%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.25), transparent)",
        }}
      />

      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
        <p className="text-sm font-medium text-[#A5A6F6] mb-6">
          About TechBeside
        </p>

        <h1 className="font-inter font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] tracking-tight max-w-3xl">
          Together, we build what your business needs next.
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-7 md:leading-8">
          We&apos;re a software company that pairs careful engineering with a
          genuine stake in your outcome — from the first prototype to the
          systems that run your business.
        </p>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-white/10 pt-8 max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-white/50">{stat.label}</dt>
              <dd className="mt-1 text-2xl md:text-3xl font-semibold text-white">
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