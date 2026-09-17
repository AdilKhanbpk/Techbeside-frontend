"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldAlert,
    Gauge,
    Smartphone,
    ArrowRight,
    CheckCircle2,
    Lock,
    Cpu,
    RefreshCw,
    Search,
    CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";

import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import FaqSection from "@/components/services/FaqSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";

import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";

/* ─────────────────── Animation Variants ─────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────── DATA ─────────────────── */
const qaTools = [
    "Cypress",
    "Playwright",
    "Selenium",
    "Jest",
    "Postman",
    "JMeter",
    "BrowserStack",
    "Appium",
    "SonarQube",
    "Cucumber",
    "K6",
    "Percy",
];

const capabilities = [
    {
        icon: CheckCircle,
        title: "Automated & Manual QA",
        desc: "Comprehensive end-to-end regression suites (Cypress, Playwright) combined with exploratory manual testing to catch UI defects early.",
    },
    {
        icon: Gauge,
        title: "Performance & Load Testing",
        desc: "Stress test web applications under high concurrency using JMeter and K6 to prevent crashes during high-traffic spikes.",
    },
    {
        icon: ShieldAlert,
        title: "Security & Penetration Audits",
        desc: "Identify OWASP Top 10 vulnerabilities, injection flaws, and authentication loopholes before deployment to production.",
    },
    {
        icon: Smartphone,
        title: "Cross-Browser & Device Testing",
        desc: "Rigorous testing across iOS, Android, Safari, Chrome, Edge, and Firefox viewports to guarantee 100% layout perfection.",
    },
];

const qaFaqs = [
    {
        question: "What types of testing services do you offer?",
        answer:
            "We provide Automated Testing, Manual Testing, Performance & Load Testing, Security Penetration Audits, Mobile App QA, and API Testing.",
    },
    {
        question: "Which automated testing frameworks do you use?",
        answer:
            "We build robust test scripts using Cypress, Playwright, Selenium, Jest, and Postman.",
    },
    {
        question: "Do you offer QA integration in CI/CD pipelines?",
        answer:
            "Yes, we embed automated test triggers directly into GitHub Actions, GitLab, or Jenkins so every pull request is verified automatically.",
    },
    {
        question: "How do you deliver bug reports?",
        answer:
            "We log structured, reproducible bug reports directly into your Jira, Trello, or GitHub Issues board complete with screenshots, video logs, and stack traces.",
    },
    {
        question: "Can you audit an existing live application?",
        answer:
            "Yes! We perform rapid 48-hour QA & security audits for existing live applications and provide actionable fix reports.",
    },
];

const services = [
    {
        title: "Web Development",
        description:
            "Full-stack web application engineering designed for speed, security, and high user conversion.",
        icon: developmentDesignImage,
        link: "/services/web-development",
    },
    {
        title: "DevOps Services",
        description:
            "CI/CD pipeline automation, server provisioning, and automated testing integrations.",
        icon: motionDesignImage,
        link: "/services/devops",
    },
    {
        title: "Software Maintenance",
        description:
            "Continuous monitoring, bug fixes, dependency updates, and 24/7 server support.",
        icon: illustrationDesignImage,
        link: "/services/software-maintenance-services",
    },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
const QATestingClient = () => {
    const categorySlug = "web-qa-tester";

    return (
        <>
            {/* ── BreadcrumbList Schema ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://www.TechBeside.co/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Web QA Testing Services",
                                item: "https://www.TechBeside.co/services/web-qa-tester",
                            },
                        ],
                    }),
                }}
            />

            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative isolate overflow-hidden bg-[#080b20] text-white">
                {/* Ambient blurs */}
                <div className="absolute -left-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-indigo-600/20 blur-[160px]" />
                <div className="absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[140px]" />
                <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[120px]" />

                <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:px-12 lg:pb-36 lg:pt-44">
                    <motion.div
                        className="mx-auto max-w-4xl text-center"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {/* Pill badge */}
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Software Quality Assurance &amp; Testing
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Flawless Software Delivery:
                            <span className="block text-indigo-300">
                                Full-Spectrum QA &amp; Automated Testing.
                            </span>
                        </motion.h1>

                        {/* Sub text */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            TechBeside delivers exhaustive web and mobile QA testing services to guarantee your product launches bug-free. From automated end-to-end regression suites to load &amp; penetration security audits, we safeguard your digital reputation.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                        >
                            <a
                                href="https://calendly.com/contact-TechBeside/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-12 items-center gap-3 rounded-full bg-indigo-600 px-7 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.7)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.8)]"
                            >
                                <AiOutlineCalendar size={18} />
                                Book Free QA Discovery
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="https://wa.me/923178261618"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                            >
                                <FaWhatsapp size={18} className="text-emerald-400" />
                                Chat on WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom QA tools marquee */}
                <div className="border-t border-white/[0.06] bg-white/[0.02]">
                    <div className="mx-auto flex max-w-[1440px] items-center overflow-hidden py-4 px-5 sm:px-8">
                        <span className="mr-6 hidden shrink-0 text-xs font-medium tracking-[0.15em] uppercase text-white/30 sm:block">
                            QA &amp; Automation Stack
                        </span>
                        <div className="relative flex-1 overflow-hidden">
                            <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap">
                                {[...qaTools, ...qaTools].map((tool, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 text-sm font-light text-white/40"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-indigo-400/60" />
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CAPABILITIES GRID ═══════════════════ */}
            <section className="relative bg-[#080b20] py-20 md:py-28">
                <div className="absolute right-0 top-1/3 -z-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <motion.div
                        className="mx-auto mb-16 max-w-3xl text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Uncompromising Quality
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Zero critical bugs at launch:
                            <span className="text-indigo-300"> Total confidence</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            We systematically inspect every user journey, API payload, and design detail to ensure flawless software performance across all devices.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {capabilities.map((cap, i) => (
                            <motion.article
                                key={cap.title}
                                variants={fadeUp}
                                custom={i}
                                className="group rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.055]"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                                    <cap.icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-indigo-300"
                                    />
                                </div>

                                <h3 className="mb-2 text-lg font-medium tracking-tight text-white">
                                    {cap.title}
                                </h3>

                                <p className="text-sm font-light leading-6 text-white/50">
                                    {cap.desc}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ NUMBERED SOLUTIONS ═══════════════════ */}
            <section className="relative overflow-hidden bg-[#080b20] py-20 md:py-28">
                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <motion.div
                        className="mb-16 max-w-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Testing Methodology
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Our 3-stage
                            <span className="text-indigo-300"> quality assurance process</span>
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                num: "01",
                                title: "Test Plan & Suite Architecture",
                                desc: "Map all edge cases, write test scenarios, and setup CI/CD Cypress/Playwright automation harnesses.",
                            },
                            {
                                num: "02",
                                title: "Execution & Real-Time Logging",
                                desc: "Run automated suites on every commit and perform manual exploratory testing, filing tickets directly to Jira/GitHub.",
                            },
                            {
                                num: "03",
                                title: "Verification & Release Sign-Off",
                                desc: "Re-test bug fixes, conduct final staging regression runs, and issue an official QA Release Certificate.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.num}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                custom={i}
                                className="relative rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
                            >
                                <span className="mb-4 block text-5xl font-extralight text-indigo-400/30">
                                    {item.num}
                                </span>
                                <h3 className="mb-3 text-xl font-medium text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-light leading-6 text-white/50">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ IMPACT BANNER ═══════════════════ */}
            <section className="relative bg-[#080b20] py-16">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <div className="relative overflow-hidden rounded-[32px] border border-indigo-500/30 bg-gradient-to-r from-indigo-900/40 via-indigo-950/60 to-violet-900/40 p-10 backdrop-blur-md md:p-14">
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                            <div className="max-w-2xl text-center md:text-left">
                                <h3 className="text-2xl font-normal tracking-tight text-white sm:text-3xl md:text-4xl">
                                    Reduce post-release bugs by over 90% with automated testing.
                                </h3>
                                <p className="mt-3 text-sm font-light text-white/60 sm:text-base">
                                    Get a free 48-hour QA audit for your application.
                                </p>
                            </div>
                            <a
                                href="https://calendly.com/contact-TechBeside/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex shrink-0 h-12 items-center gap-3 rounded-full bg-white px-7 text-sm font-medium text-indigo-950 shadow-lg transition-transform hover:scale-105"
                            >
                                Get Free QA Audit
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SHARED SECTIONS ═══════════════════ */}
            <div className="max-w-[1450px] mx-auto px-4">
                <ServicesRelatedProjects slug={categorySlug} />
                <FaqSection title="Frequently Asked Questions" faqs={qaFaqs} />
                <OurTeam />
                <RelatedServices services={services} />

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default QATestingClient;
