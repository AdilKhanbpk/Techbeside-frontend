import React from "react";
import Link from "next/link";

const linkClass =
  "text-[#6366F1] underline decoration-[#6366F1]/30 underline-offset-4 hover:decoration-[#6366F1] transition-colors";

const OverviewSec: React.FC = () => {
  return (
    <section aria-labelledby="ceo-message-heading" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:gap-16 items-start">
        {/* Text section */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <h2
            id="ceo-message-heading"
            className="text-[#6366F1] font-inter text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
          >
            CEO Message
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify">
            As the world rapidly transforms into a global village through{" "}
            <Link
              href="/services/digital-marketing-for-software-companies"
              className={linkClass}
            >
              digitalization
            </Link>
            , people are becoming more interconnected than ever before. It
            shapes our vision to deliver innovative IT solutions that are
            agile, AI-driven and designed to adapt to an ever-changing
            digital landscape.
          </p>
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify">
            We&apos;re not just creating digital assets — we&apos;re
            fostering long-term partnerships built on trust, collaboration
            and a shared vision for success. We, at{" "}
            <Link href="/" className={linkClass}>
              TechBeside
            </Link>
            , are committed to serving clients across the globe and driving
            toward a future where innovation meets the demands of tomorrow.
          </p>
        </div>

        {/* Signature panel — replaces the CEO photo */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative border border-gray-200 rounded-2xl p-8 md:p-10 bg-[#FAFAFF]">
            <span
              aria-hidden="true"
              className="block font-inter text-6xl md:text-7xl leading-none text-[#6366F1]/25 font-semibold mb-4"
            >
              &ldquo;
            </span>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
              Our vision is to build agile, AI-driven solutions that meet the
              world where it&apos;s heading.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Saud Khan</p>
                <p className="text-sm text-gray-500">
                  Chief Executive Officer, TechBeside
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/saudkhan39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#6366F1] hover:text-[#4F46E5] whitespace-nowrap transition-colors"
                aria-label="Visit Saud Khan's LinkedIn profile"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSec;