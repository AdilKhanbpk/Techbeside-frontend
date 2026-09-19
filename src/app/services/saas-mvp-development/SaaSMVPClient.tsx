"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Zap,
    Users,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    ShieldCheck,
    Code2,
    Clock,
    Sparkles,
    Layers,
    ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import FaqSection from "@/components/services/FaqSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";

// Portfolio images
import healthcareImg from "../../../../public/assets/portfoliopage/healthcare.webp";
import restaurantImg from "../../../../public/assets/portfoliopage/restaurant.webp";
import realstateImg from "../../../../public/assets/portfoliopage/realstate.webp";
import ecommerceImg from "../../../../public/assets/portfoliopage/eccommerce.webp";
import hospitalityImg from "../../../../public/assets/portfoliopage/hospitality.webp";
import greenEnergyImg from "../../../../public/assets/portfoliopage/greenenergy.webp";

// Related services images
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
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
const mvpStack = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Stripe API",
    "AWS",
    "Tailwind CSS",
    "GraphQL",
    "Redis",
    "Docker",
];

const capabilities = [
    {
        icon: Rocket,
        title: "Fast Launch (30–45 Days)",
        desc: "Lean, hyper-focused MVP sprint designed to validate core hypotheses and put your product into early adopters' hands quickly.",
    },
    {
        icon: Zap,
        title: "Scalable SaaS Architecture",
        desc: "Clean modular code built on modern web stacks (Next.js, Node, PostgreSQL) that grows without incurring expensive re-writes.",
    },
    {
        icon: Users,
        title: "Founder-Centric UI/UX",
        desc: "Intuitive onboarding flows, crisp conversion funnels, and user dashboards designed to turn visitors into paying subscribers.",
    },
    {
        icon: BarChart3,
        title: "SEO & Growth Ready",
        desc: "Built-in SSR, canonical schema tags, fast initial load speeds, and analytics setup ready for multi-channel acquisition.",
    },
];

const saasMvpFaqs = [
    {
        question: "How long does it take to build an MVP?",
        answer:
            "Usually 30–45 days depending on complexity. We focus strictly on core features to get you to market and validate your idea fast.",
    },
    {
        question: "Do you work with startups?",
        answer:
            "Yes, we specialize in startups and early-stage founders, designing for rapid launches, clean budgets, and flexibility.",
    },
    {
        question: "Can you scale the product later?",
        answer:
            "Yes, we build with scalability in mind from day one. Our modular architecture supports growth without major rewrites.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes, we offer ongoing maintenance, performance optimization, cloud deployment support, and feature additions.",
    },
    {
        question: "Who owns the code and intellectual property?",
        answer:
            "You own 100% of the code, designs, and intellectual property. We push everything directly to your private GitHub repository.",
    },
];

const portfolioVerticals = [
    {
        title: "Healthcare Portals",
        img: healthcareImg,
        link: "/healthcare",
        desc: "Telemedicine portals & patient engines",
    },
    {
        title: "E-Commerce Engines",
        img: ecommerceImg,
        link: "/e-commerce",
        desc: "Custom checkout & subscription engines",
    },
    {
        title: "Real Estate Matchmakers",
        img: realstateImg,
        link: "/real-estate",
        desc: "Broker portals and property locators",
    },
    {
        title: "Restaurant Software",
        img: restaurantImg,
        link: "/restaurants",
        desc: "Online food ordering & digital dashboards",
    },
    {
        title: "Hospitality Apps",
        img: hospitalityImg,
        link: "/hospitality",
        desc: "Interactive hotel booking software",
    },
    {
        title: "Green Energy Tech",
        img: greenEnergyImg,
        link: "/green-energy",
        desc: "Solar output tracking & analytics panels",
    },
];

const relatedServices = [
    {
        title: "Web Application Development",
        description: "Full-stack web apps built for performance and scalability.",
        icon: webDesignImage,
        link: "/services/web-development",
    },
    {
        title: "UI/UX Design for SaaS",
        description: "User-centered design that drives adoption and retention.",
        icon: motionDesignImage,
        link: "/services/ui-ux-design-agency",
    },
    {
        title: "DevOps & Deployment",
        description: "Infrastructure setup, CI/CD, and reliable deployment.",
        icon: illustrationDesignImage,
        link: "/services/devops",
    },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
const SaaSMVPClient = () => {
    const categorySlug = "saas-mvp-development";

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
                                name: "SaaS MVP Development",
                                item: "https://www.TechBeside.co/services/saas-mvp-development",
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
                            SaaS MVP Development • 30–45 Day Launch
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Launch Your SaaS Product
                            <span className="block text-indigo-300">in 30–45 Days.</span>
                        </motion.h1>

                        {/* Sub text */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            Turn your SaaS idea into a scalable, market-ready product faster. At
                            TechBeside, we specialize in rapid MVP development for founders who
                            want to validate their idea, gather real user feedback, and generate
                            revenue—supported by{" "}
                            <Link
                                href="/services/ui-ux-design-agency"
                                className="text-indigo-300 hover:underline"
                            >
                                clean UI/UX
                            </Link>
                            ,{" "}
                            <Link
                                href="/services/web-development"
                                className="text-indigo-300 hover:underline"
                            >
                                scalable architecture
                            </Link>
                            , and production-ready code.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                        >
                            <a
                                href="https://calendly.com/techbeside/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-12 items-center gap-3 rounded-full bg-indigo-600 px-7 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.7)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.8)]"
                            >
                                <AiOutlineCalendar size={18} />
                                Book Free Strategy Call
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

                {/* Bottom tech marquee */}
                <div className="border-t border-white/[0.06] bg-white/[0.02]">
                    <div className="mx-auto flex max-w-[1440px] items-center overflow-hidden py-4 px-5 sm:px-8">
                        <span className="mr-6 hidden shrink-0 text-xs font-medium tracking-[0.15em] uppercase text-white/30 sm:block">
                            SaaS Tech Stack
                        </span>
                        <div className="relative flex-1 overflow-hidden">
                            <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap">
                                {[...mvpStack, ...mvpStack].map((tool, i) => (
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
                            Built For Founders
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Move fast with
                            <span className="text-indigo-300"> focused development</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            We flip the script on traditional software agencies. We build lean,
                            validate fast, and ensure your SaaS application is ready for real users.
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

            {/* ═══════════════════ PROVEN PROCESS ═══════════════════ */}
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
                            Roadmap to Launch
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Our 4-step SaaS
                            <span className="text-indigo-300"> MVP roadmap</span>
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: "01",
                                title: "Strategy & Planning",
                                desc: "Scope mapping, core value proposition isolation, and 30-day sprint timeline definition.",
                            },
                            {
                                step: "02",
                                title: "Design & Full-Stack Dev",
                                desc: "High-fidelity clickable Figma prototypes followed by modular Next.js & API engineering.",
                            },
                            {
                                step: "03",
                                title: "Testing & Security",
                                desc: "Stripe payment integration testing, cross-browser audits, and zero-downtime staging deployment.",
                            },
                            {
                                step: "04",
                                title: "Launch & Support",
                                desc: "Cloud deployment to AWS/Vercel with 30-90 days of dedicated post-launch feature iteration.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                custom={i}
                                className="relative rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm"
                            >
                                <span className="mb-4 block text-4xl font-extralight text-indigo-400/40">
                                    {item.step}
                                </span>
                                <h3 className="mb-2 text-lg font-medium text-white">
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

            {/* ═══════════════════ FLEXIBLE PRICING SECTION ═══════════════════ */}
            <section className="relative bg-[#080b20] py-20 md:py-28">
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
                            Transparent Investment
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Flexible MVP Pricing Packages
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            Tailored development packages structured for startup budgets. You own
                            100% of the code upon completion.
                        </motion.p>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Tier 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            custom={0}
                            className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-medium text-white">Basic MVP</h3>
                            <div className="my-4 text-3xl font-light text-indigo-300">
                                $2,000 – $3,500
                            </div>
                            <p className="mb-6 text-sm text-white/50">
                                Perfect for validating a lean core idea quickly.
                            </p>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Core
                                    features only
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Clean
                                    responsive UI/UX
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Single
                                    payment gateway (Stripe)
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> 30 days
                                    post-launch support
                                </li>
                            </ul>
                        </motion.div>

                        {/* Tier 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            custom={1}
                            className="relative rounded-[28px] border border-indigo-500/40 bg-gradient-to-b from-indigo-600/20 to-white/[0.04] p-8 backdrop-blur-sm"
                        >
                            <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-medium text-white">Standard MVP</h3>
                            <div className="my-4 text-3xl font-light text-indigo-300">
                                $3,500 – $6,000
                            </div>
                            <p className="mb-6 text-sm text-white/50">
                                Best for founders seeking a complete market launch.
                            </p>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Full-stack
                                    Next.js &amp; Node engineering
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Custom
                                    design system &amp; user dashboard
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Multi-payment
                                    &amp; Auth integrations
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> SEO &amp;
                                    analytics setup
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> 60 days
                                    post-launch support
                                </li>
                            </ul>
                        </motion.div>

                        {/* Tier 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            custom={2}
                            className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-medium text-white">Advanced MVP</h3>
                            <div className="my-4 text-3xl font-light text-indigo-300">
                                $6,000 – $8,000+
                            </div>
                            <p className="mb-6 text-sm text-white/50">
                                Built for complex workflows &amp; multi-tenant SaaS.
                            </p>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> All Standard
                                    MVP features
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Real-time
                                    sockets &amp; admin controls
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Custom AI
                                    / API integrations
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> 90 days
                                    post-launch support
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ INDUSTRY SOLUTIONS PORTFOLIO ═══════════════════ */}
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
                            Industry Verticals
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Proven experience across
                            <span className="text-indigo-300"> key industries</span>
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {portfolioVerticals.map((v, i) => (
                            <Link
                                key={v.title}
                                href={v.link}
                                className="group rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.055]"
                            >
                                <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                                    <Image
                                        src={v.img}
                                        alt={v.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="text-lg font-medium text-white transition-colors group-hover:text-indigo-300">
                                    {v.title}
                                </h4>
                                <p className="mt-1 text-xs font-light text-white/50">
                                    {v.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SHARED SECTIONS ═══════════════════ */}
            <div className="max-w-[1450px] mx-auto px-4">
                <FaqSection title="Frequently Asked Questions" faqs={saasMvpFaqs} />
                <OurTeam />
                {/* <RelatedServices services={relatedServices} /> */}

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default SaaSMVPClient;

