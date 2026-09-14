import React from "react";
import Link from "next/link";

const facts = [
  { label: "Headquarters", value: "Remote-first, global clients" },
  { label: "Focus", value: "Web, mobile & DevOps" },
  { label: "Approach", value: "Senior engineers, no hand-offs" },
];

const linkClass =
  "text-[#6366F1] underline decoration-[#6366F1]/30 underline-offset-4 hover:decoration-[#6366F1] transition-colors";

const Overview: React.FC = () => {
  return (
    <section aria-labelledby="overview-heading" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Statement column */}
        <div className="lg:col-span-5">
          <h2
            id="overview-heading"
            className="text-[#6366F1] font-inter text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight"
          >
            A software partner for teams who move fast.
          </h2>

          <dl className="mt-10 space-y-6 border-t border-gray-200 pt-8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 text-sm md:text-base"
              >
                <dt className="text-gray-500">{fact.label}</dt>
                <dd className="text-gray-900 font-medium text-right">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Body column */}
        <div className="lg:col-span-7">
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8">
            TechBeside is a{" "}
            <Link href="/" className={linkClass}>
              software company
            </Link>{" "}
            built for businesses that need to move quickly without cutting
            corners. Our team designs, builds and ships solutions that hold up
            as your business grows — high-quality, scalable and genuinely
            easy to use.
          </p>
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8">
            Whether you&apos;re launching a startup or scaling an enterprise,
            we support you across{" "}
            <Link href="/services/web-development" className={linkClass}>
              web development
            </Link>
            ,{" "}
            <Link
              href="/services/mobile-app-development-company"
              className={linkClass}
            >
              mobile app development
            </Link>
            ,{" "}
            <Link href="/services/devops" className={linkClass}>
              DevOps
            </Link>{" "}
            and{" "}
            <Link
              href="/services/affordable-graphic-design-services"
              className={linkClass}
            >
              graphic design
            </Link>
            . Every engagement is end-to-end: we own the outcome, not just
            the deliverable.
          </p>
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8">
            Bless us with the opportunity to serve, and we&apos;ll build the
            future with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;