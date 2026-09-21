import React from "react";

const BlogHeroSection: React.FC = () => {
  return (
    <section
      aria-label="Blog introduction"
      className="relative bg-[#0B0B14] text-white overflow-hidden"
    >
      {/* Fine grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      
      {/* Soft indigo glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.30), transparent)",
        }}
      />

      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
        {/* Tag */}
        <p className="text-center text-sm font-medium text-[#A5A6F6] mb-6">
          Our Blog
        </p>

        {/* Heading */}
        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl mx-auto">
          Insights, updates, and <span className="text-indigo-500">industry trends</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-xl text-white/60 leading-8 md:leading-9">
          Stay ahead with expert insights on software development, AI automation, digital transformation, and the latest technology trends shaping the future of business.
        </p>
      </div>
    </section>
  );
};

export default BlogHeroSection;
